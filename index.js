const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// GET /me endpoint
app.get('/me', async (req, res) => {
  try {
    // Fetch cat fact
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });

    // Build JSON response
    const data = {
      status: 'success',
      user: {
        email: 'festiveokotieboh@gmail.com',
        name: 'Festus Okagbare',
        stack: 'Node.js/Express'
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact
    };

    res.status(200).json(data);

  } catch (error) {
    // If the cat fact API fails
    res.status(500).json({
      status: 'error',
      message: 'Could not fetch cat fact',
      timestamp: new Date().toISOString()
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
