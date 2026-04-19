// api.js

const express = require('express');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
});
app.use(limiter);

// Input validation
const validateInput = (data) => {
  // Add your validation logic (e.g., schema validation)
  return data && typeof data.prompt === 'string' && data.prompt.trim() !== '';
};

// API endpoint to handle Claude API calls
app.post('/api/claude', async (req, res) => {
  const inputData = req.body;

  // Validate input
  if (!validateInput(inputData)) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    const response = await axios.post('https://your-claude-api-endpoint', inputData, {
      headers: {
        'Authorization': `Bearer ${process.env.CLAUDE_API_KEY}`,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error calling Claude API:', error);
    res.status(500).json({ error: 'Failed to call Claude API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
