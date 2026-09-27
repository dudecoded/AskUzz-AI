import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getGeminiResponse(message) {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent`,
    {
      contents: [
        {
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY,
      },
    }
  );

  return response.data.candidates[0].content.parts[0].text;
}