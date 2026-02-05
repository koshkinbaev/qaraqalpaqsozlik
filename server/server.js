import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import "dotenv/config";

const app = express();
app.use(helmet());
app.use(express.json({ limit: "1mb" }));

// GitHub Pages domeningizni ruxsat beramiz:
app.use(cors({
  origin: ["https://koshkinbaev.github.io"],
}));

app.use(rateLimit({ windowMs: 60_000, max: 60 }));

const PORT = process.env.PORT || 3000;
const KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

app.get("/health", (req, res) => res.json({ ok: true, model: MODEL }));

app.post("/api/gemini", async (req, res) => {
  try {
    if (!KEY) return res.status(500).json({ error: "GEMINI_API_KEY yo'q (Render env ga qo'ying)" });

    const { message, lang, context } = req.body || {};
    if (!message) return res.status(400).json({ error: "message bo'sh" });

    const prompt = [
      "Siz Qaraqalpaq_sózlik sayti uchun AI yordamchisiz.",
      context ? `Kontekst: ${context}` : "",
      lang ? `Til: ${lang}` : "",
      `Savol: ${message}`,
      "Javob:"
    ].filter(Boolean).join("\n");

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });

    const data = await r.json();
    if (!r.ok) return res.status(500).json({ error: data?.error?.message || "Gemini API error", raw: data });

    const text = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join("") || "Javob topilmadi.";
    res.json({ text });
  } catch (e) {
    res.status(500).json({ error: e?.message || "Server error" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
