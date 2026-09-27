function ChatWindow({ messages }) {
  return (
    <main>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </main>
  );
}

export default ChatWindow;