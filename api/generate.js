
import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Initialize Gemini with the Server-Side API Key
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
      }
    });

    // Send the text back to the frontend
    return res.status(200).json({ text: response.text });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
}
