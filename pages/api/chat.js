// pages/api/chat.js
export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await fetch(process.env.LLAMA_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    res.status(200).json({ result: data.result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: 'Error communicating with the Llama API.' });
  }
}
