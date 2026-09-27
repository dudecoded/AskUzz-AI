import { useState } from "react";
import Navbar from "./components/Navbars";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([]);

  function handleSend() {
  if (message.trim() === "") return;

  setMessages([...messages, message]);
  setMessage("");
}

  return (
    <div>
      <Navbar />
      <ChatWindow messages={messages} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;