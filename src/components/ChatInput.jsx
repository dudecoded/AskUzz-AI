function ChatInput({ message, setMessage }) {
  return (
    <div>
      <input
        placeholder="Ask something..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <button>Send</button>
    </div>
  );
}

export default ChatInput;