const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 8080;

// /me endpoint
app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    const fact = response.data.fact;

    const data = {
      status: "success",
      user: {
        email: "festiveokotieboh@gmail.com",
        name: "Festus Okagbare",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: fact,
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact",
      timestamp: new Date().toISOString(),
    });
  }
});

// Optional: root route for sanity check
app.get("/", (req, res) => {
  res.send("Server is running. Try /me endpoint.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
