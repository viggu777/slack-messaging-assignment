const express = require("express");
const slackRoutes = require("./routes/slack");
require("dotenv").config();

const app = express();
app.use(express.json());

// Slack API Routes
app.use("/slack", slackRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
