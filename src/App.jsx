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

    // Show user's message immediately
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

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          text: "Sorry, something went wrong. Check the console.",
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