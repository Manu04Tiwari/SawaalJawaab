### Sawaal-Jawaab

## 📌  Overview

Sawaal-Jawaab is a web-based application designed to create, manage, and display frequently asked questions (FAQs). It includes features like:

Adding, updating, and deleting FAQs

Rich text editing for answers (using React-Quill)

Language-specific translations

MySQL database for storage

🛠 Tech Stack

Frontend: React.js

Backend: Node.js with Express.js

Database: MySQL with Sequelize ORM

Additional Libraries: Axios, React-Quill, dotenv

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/Manu04Tiwari/SawaalJawaab.git
cd faq-management

2️⃣ Backend Setup (Node.js + Express + MySQL)

Install Dependencies

cd faq-system
npm install

Configure Environment Variables

Create a .env file in faq-system and set up the database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=faq_db
PORT=5000

Run Migrations & Start Server

npx sequelize-cli db:migrate
npm start

3️⃣ Frontend Setup (React.js)

Install Dependencies

cd ../faq-client
npm install

Start React App

npm start

📂 Project Structure

faq-management/
│-- faq-system/  # Backend (Node.js, Express.js, MySQL)
│   │-- models/  # Sequelize Models
│   │-- routes/  # Express Routes
│   │-- server.js
│
│-- faq-client/  # Frontend (React.js)
│   │-- src/
│   │   │-- components/
│   │   │-- App.js
│   │   │-- index.js
│
│-- README.md

✅ Features

CRUD operations for FAQs

Rich text editing support (React-Quill)

Multi-language translations

MySQL database integration

REST API with Express.js

🔧 Troubleshooting

1️⃣ Blank Screen in React

Check the browser console (F12 > Console) for errors.

Ensure the backend is running and accessible (http://localhost:5000).

2️⃣ Database Connection Issues

Verify MySQL is running.

Check credentials in .env file.

3️⃣ react_dom_1.default.findDOMNode is not a function

Ensure React version is compatible with dependencies.

Try downgrading React-Quill: npm install react-quill@2.0.0-beta.2

📜 License

This project is licensed under the MIT License.

✨ Contributors

Your Name - Manu Tiwari

Feel free to contribute and improve this project! 🚀