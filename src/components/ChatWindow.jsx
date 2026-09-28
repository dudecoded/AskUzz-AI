function ChatWindow({ messages, loading }) {
  return (
    <main>
      {messages.map((message, index) => (
        <p key={index}>
          <strong>
            {message.sender === "user" ? "You" : "AI"}:
          </strong>{" "}
          {message.text}
        </p>
      ))}

      {loading && <p>AI is thinking... 🤖</p>}
    </main>
  );
}

export default ChatWindow;