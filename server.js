// server.js
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "1mb" }));

// Local host (yoki domeningiz) uchun ruxsat
app.use(cors({
  origin: true, // prod'da: ["https://sizningdomen.uz"]
}));

// Oddiy rate limit (DDoS/abusega qarshi)
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 30, // 1 daqiqada 30 so'rov
}));

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY topilmadi. .env ga yozing.");
}

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash"; // docsda misol sifatida kelgan :contentReference[oaicite:3]{index=3}
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Minimal sanitizatsiya
function safeText(v) {
  if (typeof v !== "string") return "";
  return v.slice(0, 4000);
}

app.post("/api/gemini", async (req, res) => {
  try {
    if (!GEMINI_API_KEY) return res.status(500).json({ error: "Serverda GEMINI_API_KEY sozlanmagan" });

    const message = safeText(req.body?.message);
    const lang = safeText(req.body?.lang) || "kaa"; // uz / kaa / ru
    const context = safeText(req.body?.context || "");

    if (!message.trim()) return res.status(400).json({ error: "message bo'sh" });

    // Tilga mos system instruction
    const system = {
      uz: "Siz Qaraqalpaq_sózlik saytining yordamchi AI'sisiz. Qisqa, aniq va foydali javob bering. Kerak bo'lsa misol keltiring. Javobni O'zbek tilida yozing.",
      kaa: "Siz Qaraqalpaq_sózlik saytınıń járdemshi AI'sısız. Qısqa, anıq hám paydalı juwap beriń. Kerek bolsa mısal keltiriń. Juwaptı Qaraqalpaq tilinde beriń.",
      ru: "Вы — AI-помощник сайта Qaraqalpaq_sózlik. Отвечайте кратко, ясно и полезно. При необходимости приводите примеры. Пишите по-русски."
    }[lang] || "Siz yordamchi AI'siz. Qisqa va aniq javob bering.";

    // Gemini generateContent body formati docs bo'yicha :contentReference[oaicite:4]{index=4}
    const body = {
      // System instruction (Gemini docs'da mavjud bo'lim sifatida keltirilgan) :contentReference[oaicite:5]{index=5}
      systemInstruction: {
        parts: [{ text: system }]
      },
      contents: [
        ...(context ? [{
          role: "user",
          parts: [{ text: `Kontekst:\n${context}` }]
        }] : []),
        {
          role: "user",
          parts: [{ text: message }]
        }
      ],
      generationConfig: {
        temperature: 0.6,
        topP: 0.9,
        maxOutputTokens: 512
      }
      // safetySettings istasangiz qo'shamiz (docs bor) :contentReference[oaicite:6]{index=6}
    };

    const r = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // API key header usuli docsda ko'rsatilgan :contentReference[oaicite:7]{index=7}
        "x-goog-api-key": GEMINI_API_KEY
      },
      body: JSON.stringify(body)
    });

    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({
        error: "Gemini API xatolik",
        details: data
      });
    }

    // Javobni chiqarib olish
    const text =
      data?.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join("") ||
      "Javob topilmadi.";

    res.json({ text });

  } catch (e) {
    res.status(500).json({ error: "Server xatolik", details: String(e) });
  }
});

app.listen(3000, () => {
  console.log("✅ Server ishga tushdi: http://localhost:3000");
});
