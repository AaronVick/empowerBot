// pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/chat', { prompt: message });
    setResponse(res.data.result);
  };

  return (
    <div>
      <h1>Llama Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask Llama..."
        />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
}
