# 🔔 Notification Service

A robust notification service that sends messages through **Email**, **SMS**, and **In-App** channels. Designed with a microservices mindset and supports **message queuing with RabbitMQ** and **auto-retries** for failed notifications.

---

## 🚀 Features

- 📧 Send notifications via Email, SMS, or In-App
- 🕓 Retry failed notifications automatically
- 🐇 Queue-based processing using RabbitMQ
- 🌐 RESTful API endpoints
- 📊 Scalable and modular architecture
- 📝 Simple logging and tracking

---

## 🧰 Tech Stack

| Layer          | Technology                        |
|----------------|-----------------------------------|
| Backend        | Node.js, Express.js               |
| Messaging      | RabbitMQ                          |
| Queue Handling | amqplib (RabbitMQ client)         |
| Containerization| Docker                           |
| Database (optional)| MongoDB (for tracking messages) |
| Deployment     | Docker CLI / Docker Desktop       |

---

## ⚙️ Installation Instructions

> ⚠️ Ensure Docker and Node.js are installed.

### 🔹 Clone the Repository

```bash
git clone https://github.com/SumandeepSahoo/nofication_service.git
cd nofication_service

🔹 Install Dependencies
    npm install

🔹 Start RabbitMQ via Docker
    docker run -d --hostname rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management

🔹 Start the Notification Server
    npm start
```
---
## 📁 Project Structure
```
notification-service/
├── src/
│   ├── controllers/
│   │   └── notificationController.js
│   ├── models/
│   │   └── Notification.js
│   ├── queue/
│   │   ├── consumer.js
│   │   └── producer.js
│   ├── routes/
│   │   └── notificationRoutes.js
│   └── services/
│       └── senderService.js
├── app.js
├── package.json
└── README.md
```
---
## 📸 Screenshots
🐳 Docker Container – RabbitMQ Running
---
Lightweight containerized RabbitMQ setup using Docker.
---
![Screenshot 2025-05-19 024025](https://github.com/user-attachments/assets/8c1d4369-901a-4451-a101-ed0cd60fd1fa)

---
🐇 RabbitMQ Dashboard – Queues in Action
---
<img width="648" alt="Screenshot 2025-05-19 012204" src="https://github.com/user-attachments/assets/7a70f610-c6c9-4352-b767-23f97dd0c9ff" />

---
## 🔮 Future Enhancements
```
⏰ Schedule-based notifications (cron triggers)
📈 Notification analytics dashboard
🔐 JWT authentication for endpoints
🧪 Unit & integration test coverage
📤 WebSocket for live notification updates
```
---
## 🤝 Contributing
```
Contributions are welcome! 🚀
Feel free to fork the repo, open issues, or submit pull requests.
Steps:
Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature/your-feature)
Create a Pull Request

```

---

Made with 💻 by Sumandeep
