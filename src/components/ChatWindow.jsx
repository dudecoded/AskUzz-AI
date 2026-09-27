function ChatWindow({ messages }) {
  return (
    <main>
      {messages.map((message, index) => (
        <p key={index}>
          {message.sender}: {message.text}
        </p>
      ))}
    </main>
  );
}

export default ChatWindow;