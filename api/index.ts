import express from "express";
import "dotenv/config";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const app = express();
app.use(express.json());

app.post("/gemini-message", async function (req, res) {
  try {
    if (!req.body.prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: req.body.prompt,
    });

    res.json({ response: text });
  } catch (error) {
    let errorMessage = "Failed to createGoogleGenerativeAI";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    res.status(500).json({ error: errorMessage });
  }
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
  });
}

export default app;
