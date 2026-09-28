function ChatInput({ message, setMessage, handleSend }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button onClick={handleSend}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;