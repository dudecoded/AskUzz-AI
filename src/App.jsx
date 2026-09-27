import { useState } from "react";
import Navbar from "./components/Navbars";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [message, setMessage] = useState("");

  function handleSend() {
    console.log(message);
  }

  return (
    <div>
      <Navbar />
      <ChatWindow message={message} />
      <ChatInput
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </div>
  );
}

export default App;