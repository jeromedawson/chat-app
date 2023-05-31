import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';

function App() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <h1>Chat App</h1>
      <ChatContainer messages={messages} onNewMessage={handleNewMessage} />
    </div>
  );
}

export default App;
