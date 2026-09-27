import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Navbar />
      <ChatWindow message={message} />
      <ChatInput message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;