function ChatInput({ message, setMessage, handleSend }) {
  return (
    <div>
      <input
        placeholder="Ask something..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;