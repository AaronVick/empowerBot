// pages/index.js
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

const HomePage = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/chat', { prompt: message });
      setResponse(res.data.result);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error communicating with the server.');
    }
  };

  return (
    <>
      <Head>
        <title>Llama Chat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <main>
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
          {response && <p>{response}</p>}
        </main>
      </div>
    </>
  );
};

export default HomePage;