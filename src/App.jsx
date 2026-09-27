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
    if (message.trim() === "") return;

    const userMessage = {
      text: message,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const aiResponse = await getGeminiResponse(message);

      const aiMessage = {
        text: aiResponse,
        sender: "ai",
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        userMessage,
        aiMessage,
      ]);
    } catch (error) {
      console.error(error);

      setMessages((previousMessages) => [
        ...previousMessages,
        userMessage,
        {
          text: "Sorry, something went wrong.",
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

      <ChatWindow messages={messages} loading={loading} />

      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;