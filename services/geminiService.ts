
/**
 * Calls the Vercel Serverless Function located at /api/generate
 */
async function callGeminiApi(promptText: string): Promise<string> {
  try {
    const response = await fetch('/api/generate', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptText })
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    const data = await response.json();
    return data.text || "No response generated.";
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
}

export const generateResearchStrategy = async (
  topic: string,
  sector: string
): Promise<string> => {
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

  return callGeminiApi(prompt);
};

export const summarizeContent = async (text: string): Promise<string> => {
  const prompt = `Summarize the following text in 3 bullet points for a quick read:\n\n${text}`;
  return callGeminiApi(prompt);
};
