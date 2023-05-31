const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.post('/api/gpt3', async (req, res) => {
  const { prompt, temperature, model } = req.body;

  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const payload = {
    prompt,
    max_tokens: 6000,
    temperature,
    n: 1,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      const aiResponse = data.choices[0].text.trim();
      res.json({ aiResponse });
    } else {
      throw new Error('Failed to fetch AI response.');
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
