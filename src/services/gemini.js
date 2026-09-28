import axios from "axios";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function getGeminiResponse(message) {
  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "openai/gpt-oss-20b",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content;
}