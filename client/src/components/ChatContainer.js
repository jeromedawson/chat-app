import React, { useState } from 'react';

function ChatContainer({ messages, onNewMessage }) {
  const [userMessage, setUserMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userMessage.trim() === '') {
      return;
    }
    onNewMessage(userMessage);
    setUserMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatContainer;
