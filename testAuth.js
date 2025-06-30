const axios = require("axios");
require("dotenv").config();

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN;

axios
  .get("https://slack.com/api/auth.test", {
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.response.data);
  });
