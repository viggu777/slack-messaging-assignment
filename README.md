# Slack Messaging App – Internship Assignment

Hi! This is the assignment I completed for the MERN Stack Internship at Sitegalleria Pvt Ltd. The task involved working with the Slack API using Node.js and implementing various messaging features inside a developer sandbox.

## ✔️ Features I Implemented

- Send a message to a Slack channel
- Schedule a message for future delivery
- Retrieve previous messages from a channel
- Edit a specific message
- Delete a message from a channel

All these features use Slack’s Web API with proper authentication using a bot token.

## 🔧 Tech Stack Used

- Node.js
- Express.js
- Axios (for HTTP requests)
- dotenv (to manage API token securely)

## 📁 Project Structure

slack-messaging-app/
├── app.js // Main server file
├── routes/
│ └── slack.js // All Slack API routes
├── .env.example // Example of the environment config
├── package.json

## ▶️ How to Run the Project

1. Clone the project or extract the ZIP.
2. Inside the project folder, create a `.env` file and add your Slack Bot Token:
3. Open a terminal and run:
4. Use Postman or any frontend to test these endpoints:

| Endpoint          | Method | Description               |
| ----------------- | ------ | ------------------------- |
| `/slack/send`     | POST   | Send a message            |
| `/slack/schedule` | POST   | Schedule a future message |
| `/slack/retrieve` | POST   | Get past messages         |
| `/slack/edit`     | POST   | Edit a message (by `ts`)  |
| `/slack/delete`   | POST   | Delete a message          |

## ✅ Example Request (Postman)

**POST to `/slack/send`**

```json
{
  "channel": "C093M5YAZQA",
  "text": "Hello from my API!"
}
```

Thanks for reviewing my assignment!

– Kola Mohan Vignesh Kumar
# slack-messaging-assignment
