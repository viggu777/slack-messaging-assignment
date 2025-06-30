const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config(); // ✅ Load environment variables from .env

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_API = "https://slack.com/api";

const headers = {
  Authorization: `Bearer ${SLACK_TOKEN}`,
  "Content-Type": "application/json; charset=utf-8",
};

console.log("Slack Token Loaded:", SLACK_TOKEN); // should print xoxb-...

// 📤 Send a message
router.post("/send", async (req, res) => {
  const { channel, text } = req.body;
  try {
    const result = await axios.post(
      `${SLACK_API}/chat.postMessage`,
      { channel, text },
      { headers }
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📅 Schedule a message
router.post("/schedule", async (req, res) => {
  const { channel, text, post_at } = req.body;
  try {
    const result = await axios.post(
      `${SLACK_API}/chat.scheduleMessage`,
      { channel, text, post_at },
      { headers }
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📥 Retrieve messages
router.post("/retrieve", async (req, res) => {
  const { channel } = req.body;
  try {
    const result = await axios.get(`${SLACK_API}/conversations.history`, {
      headers,
      params: { channel },
    });
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✏️ Edit a message
router.post("/edit", async (req, res) => {
  const { channel, ts, text } = req.body;
  try {
    const result = await axios.post(
      `${SLACK_API}/chat.update`,
      { channel, ts, text },
      { headers }
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ❌ Delete a message
router.post("/delete", async (req, res) => {
  const { channel, ts } = req.body;
  try {
    const result = await axios.post(
      `${SLACK_API}/chat.delete`,
      { channel, ts },
      { headers }
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
