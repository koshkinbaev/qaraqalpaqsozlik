// server.js
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";

// Node 18+ da fetch bor, Node 16/17 bo'lsa undici kerak
import { fetch as undiciFetch } from "undici";

dotenv.config();

const app = express();

// ====== Config ======
const PORT = Number(process.env.PORT || 3000);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// PROD: domenlaringizni yozing. DEV: bo'sh qolsin, hammasiga ruxsat beradi.
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// fetch tanlash
const fetchFn = globalThis.fetch ? globalThis.fetch.bind(globalThis) : undiciFetch;

// ====== Middlewares ======
app.use(helmet());
app.use(express.json({ limit: "1mb" }));

app.use(cors({
  origin: (origin, cb) => {
    // Postman/curl yoki local file bo'lsa origin bo'lmaydi
    if (!origin) return cb(null, true);

    // Agar allowlist bo'sh bo'lsa => DEV rejim: ruxsat beramiz
    if (ALLOWED_ORIGINS.length === 0) return cb(null, true);

    if (ALLOWED_ORIGINS.includes(origin)) return cb(null, true);

    return cb(new Error("CORS blocked: " + origin), false);
  },
  credentials: false
}));

// Umumiy rate limit
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false
}));

// /api/gemini uchun alohida limit (kuchliroq)
const geminiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false
});

// ====== Utils ======
function safeText(v, max = 4000) {
  if (typeof v !== "string") return "";
  return v.replace(/\u0000/g, "").slice(0, max);
}

function safeLang(v) {
  const x = safeText(v, 10).toLowerCase();
  return ["uz", "kaa", "ru"].includes(x) ? x : "kaa";
}

// Gemini javobini ishonchli olish
function extractGeminiText(data) {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) {
    const txt = parts.map(p => p?.text).filter(Boolean).join("");
    return txt?.trim() ? txt : "";
  }
  return "";
}

function systemPromptByLang(lang) {
  const map = {
    uz: "Siz Qaraqalpaq_sózlik saytining yordamchi AI'sisiz. Qisqa, aniq, foydali javob bering. Kerak bo'lsa misol keltiring. Javobni O'zbek tilida yozing.",
    kaa: "Siz Qaraqalpaq_sózlik saytınıń járdemshi AI'sısız. Qısqa, anıq hám paydalı juwap beriń. Kerek bolsa mısal keltiriń. Juwaptı Qaraqalpaq tilinde beriń.",
    ru: "Вы — AI-помощник сайта Qaraqalpaq_sózlik. Отвечайте кратко, ясно и полезно. При необходимости приводите примеры. Пишите по-русски."
  };
  return map[lang] || "Siz yordamchi AI'siz. Qisqa va aniq javob bering.";
}

async function geminiGenerate({ lang, message, context, history }) {
  if (!GEMINI_API_KEY) {
    const err = new Error("GEMINI_API_KEY sozlanmagan (.env da yo'q)");
    err.status = 500;
    throw err;
  }

  const system = systemPromptByLang(lang);

  // history formati: [{role:"user"|"model", text:"..."}]
  const contents = [];

  // Kontekst bo'lsa qo'shamiz
  if (context) {
    contents.push({
      role: "user",
      parts: [{ text: `Kontekst:\n${context}` }]
    });
  }

  // Oldingi chat (ixtiyoriy)
  if (Array.isArray(history) && history.length) {
    for (const h of history.slice(-12)) { // oxirgi 12 ta xabar
      const role = h?.role === "model" ? "model" : "user";
      const text = safeText(h?.text || "", 2000);
      if (!text.trim()) continue;

      contents.push({
        role,
        parts: [{ text }]
      });
    }
  }

  // Hozirgi savol
  contents.push({
    role: "user",
    parts: [{ text: message }]
  });

  const body = {
    systemInstruction: {
      parts: [{ text: system }]
    },
    contents,
    generationConfig: {
      temperature: 0.6,
      topP: 0.9,
      maxOutputTokens: 512
    },
    // Xohlasangiz safetySettingsni ham qo'shdim (oddiy holat)
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
    ]
  };

  // Timeout (15s)
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 15000);

  try {
    const r = await fetchFn(GEMINI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY
      },
      body: JSON.stringify(body),
      signal: ctrl.signal
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      const err = new Error("Gemini API xatolik");
      err.status = r.status;
      err.details = data;
      throw err;
    }

    const text = extractGeminiText(data) || "Javob topilmadi.";
    return { text, raw: data };
  } finally {
    clearTimeout(t);
  }
}

// ====== Routes ======
app.get("/health", (req, res) => {
  res.json({
    ok: true,
    model: MODEL,
    hasKey: Boolean(GEMINI_API_KEY),
    time: new Date().toISOString()
  });
});

app.post("/api/gemini", geminiLimiter, async (req, res) => {
  try {
    const message = safeText(req.body?.message, 4000);
    const lang = safeLang(req.body?.lang);
    const context = safeText(req.body?.context || "", 4000);

    // history: optional
    const history = req.body?.history;

    if (!message.trim()) return res.status(400).json({ error: "message bo'sh" });

    const out = await geminiGenerate({ lang, message, context, history });
    res.json({ text: out.text });

  } catch (e) {
    const status = e?.status || 500;
    res.status(status).json({
      error: e?.message || "Server xatolik",
      details: e?.details || String(e)
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
  if (!GEMINI_API_KEY) console.log("⚠️ GEMINI_API_KEY yo'q. .env faylni tekshiring.");
  if (ALLOWED_ORIGINS.length) console.log("🔒 CORS allowlist:", ALLOWED_ORIGINS);
});

