// Project Structure
Backend: /server

server/
├── models/
│ └── Student.js
├── routes/
│ └── studentRoutes.js
├── .env
├── server.js
├── package.json

// Install dependencies:

mkdir server && cd server
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
