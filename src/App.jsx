import { useState } from "react";
import Navbar from "./components/Navbars";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import { getGeminiResponse } from "./services/gemini";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (message.trim() === "" || loading) return;

    const userMessage = {
      text: message,
      sender: "user",
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    const currentMessage = message;
    setMessage("");
    setLoading(true);

    try {
      const aiResponse = await getGeminiResponse(currentMessage);

      const aiMessage = {
        text: aiResponse,
        sender: "ai",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        aiMessage,
      ]);
    } catch (error) {
      console.error(
        "Gemini error:",
        error.response?.data || error.message
      );

      const errorMessage =
        error.response?.data?.error?.message ||
        error.message ||
        "Unknown error";

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          text: `API Error: ${errorMessage}`,
          sender: "ai",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />

      <ChatWindow
        messages={messages}
        loading={loading}
      />

      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;