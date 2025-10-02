🏠 RoomDekho

RoomDekho is a full-stack web application that helps users find and list rooms, PGs, and flats with ease.
It provides a modern UI (React + Tailwind) on the client side and a secure, scalable backend (Node.js + Express + MongoDB) on the server side.

🚀 Features

🔍 Browse & Search Residencies – Explore available rooms and properties.

🏠 Property Listings – Owners can add/manage rooms and flats.

👤 User Authentication – Secure login/signup (JWT-based).

🎨 Modern Responsive UI – Works on all devices.

📩 Contact & Inquiry – Easy way to reach out to property owners.

🛠️ Tech Stack
Frontend (Client)

React.js (with Vite)

TailwindCSS + ShadCN/UI + Framer Motion

Lucide React Icons

Backend (Server)

Node.js + Express.js

MongoDB with Mongoose ORM

JWT Authentication

CORS & dotenv for configuration

📂 Project Structure
RoomDekho/
│── client/                     # Frontend
│   ├── src/
│   │   ├── components/         # UI components (Header, Hero, Residencies, etc.)
│   │   ├── utils/              # Data & helpers
│   │   ├── App.jsx             # Root component
│   │   └── main.jsx            # Entry point
│   └── package.json
│
│── server/                     # Backend
│   ├── config/                 # DB & environment config
│   ├── controllers/            # Business logic (properties, users, etc.)
│   ├── models/                 # MongoDB models
│   ├── routes/                 # API endpoints
│   ├── server.js               # Entry point
│   └── package.json
│
└── README.md

⚡ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/roomdekho.git
cd roomdekho

2️⃣ Setup Client
cd client
npm install
npm run dev


App runs at: http://localhost:5173/

3️⃣ Setup Server
cd ../server
npm install
npm start


Server runs at: http://localhost:5000/
 (default)

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user & get JWT
GET	/api/rooms	Fetch all available rooms
POST	/api/rooms	Add a new room listing
GET	/api/rooms/:id	Fetch a single room detail
📸 Screenshots

Add screenshots of UI here (Home, Residencies, Contact, etc.)

🤝 Contribution

Contributions are welcome!

Fork the repository

Create a feature branch (feature/your-feature)

Commit changes

Push and open a PR

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Developed with ❤️ by Somesh Tiwari
