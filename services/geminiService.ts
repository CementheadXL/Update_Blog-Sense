import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateResearchStrategy = async (
  topic: string,
  sector: string
): Promise<string> => {
  try {
    const ai = getAiClient();
    const prompt = `
      You are an expert Prospect Researcher for a nonprofit. 
      Create a concise strategic research plan for a potential donor in the "${sector}" sector.
      The specific focus or question is: "${topic}".
      
      Please structure the response with the following Markdown headers:
      1. **Key Data Points needed**
      2. **Wealth Indicators to Look For**
      3. **Philanthropic Affinity Signals**
      4. **Suggested AI Prompt for Analysis** (A prompt the user could use to analyze text about this donor)
      
      Keep the tone professional and analytical.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
      }
    });

    return response.text || "No strategy generated.";
  } catch (error) {
    console.error("Error generating research strategy:", error);
    throw error;
  }
};

export const summarizeContent = async (text: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Summarize the following text in 3 bullet points for a quick read:\n\n${text}`,
    });
    return response.text || "Could not summarize.";
  } catch (error) {
    console.error("Error summarizing:", error);
    return "Error summarizing content.";
  }
};