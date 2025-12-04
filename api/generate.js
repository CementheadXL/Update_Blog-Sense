export default async function handler(request, response) {
  // 1. Get the prompt from your website
  const { prompt } = request.body;

  // 2. Call Google Gemini (using the hidden key)
  const apiKey = process.env.GEMINI_API_KEY; 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await apiResponse.json();

  // 3. Send the answer back to your frontend
  return response.status(200).json(data);
}