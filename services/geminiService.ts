
/**
 * Calls the Vercel Serverless Function located at /api/generate
 */
async function callGeminiApi(promptText: string): Promise<string> {
  try {
    if (!promptText || promptText.trim() === "") {
      throw new Error("Prompt text is empty.");
    }

    console.log(`Calling Gemini API with prompt length: ${promptText.length}`);
    const response = await fetch('/api/generate', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: promptText })
    });
    
    if (!response.ok) {
      // Handle non-JSON errors (like 404 HTML pages returned by GitHub Pages or Vercel routing issues)
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Server error: ${response.status}. Check Vercel Function logs.`);
      } else {
        // If the server returns HTML (likely a 404 page), we can't parse it as JSON
        const text = await response.text();
        if (response.status === 404) {
             throw new Error("API endpoint not found (404). If you recently migrated to Vercel, ensure the DNS has propagated and you are accessing the Vercel domain, not GitHub Pages.");
        }
        throw new Error(`Server returned non-JSON error (${response.status}): ${text.slice(0, 100)}...`);
      }
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
