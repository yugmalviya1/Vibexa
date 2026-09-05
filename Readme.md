# 🎵 Vibexa

### Your expression. Your vibe. Your music.

Vibexa is a full-stack, emotion-based music recommendation web application that detects a user's facial expression and recommends music according to their current mood.

Instead of manually choosing what to listen to, Vibexa uses facial expression recognition to understand the user's mood and turn it into a personalized music experience.

---

## ✨ Features

- 🎭 **Facial Expression Detection** — Detects emotions from facial expressions using the camera.
- 🎵 **Mood-Based Music Recommendation** — Selects songs based on the detected mood.
- 🎧 **Music Player** — Play and control recommended songs with artwork and song information.
- 🔐 **User Authentication** — Registration, login, logout, and authenticated user sessions.
- ⚡ **Redis Integration** — Uses Redis for fast in-memory data access and caching.
- 🗄️ **MongoDB Database** — Stores application and user data.
- ☁️ **ImageKit Integration** — Handles media/file storage.
- 🚀 **Full-Stack Architecture** — React frontend connected to a Node.js/Express REST API.

---

## 🧠 How Vibexa Works

```text
             📷 Camera
                 │
                 ▼
       🧠 Facial Expression
           Recognition
                 │
                 ▼
          🎭 Detected Mood
                 │
                 ▼
       🎵 Song Recommendation
                 │
                 ▼
          🎧 Music Player
```

Vibexa connects facial expressions with music to create a mood-driven listening experience.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- SCSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- Authentication & Cookies
- CORS

### Services & Deployment

- ImageKit — media/file storage
- Redis — caching and fast data access
- Vercel — frontend deployment
- Render — backend deployment

---

## 🏗️ Architecture

```text
┌───────────────────────┐
│     React Frontend    │
│        Vercel         │
└───────────┬───────────┘
            │
            │ REST API
            ▼
┌───────────────────────┐
│   Node.js + Express   │
│        Render         │
└───────┬───────┬───────┘
        │       │
        ▼       ▼
   ┌────────┐ ┌────────┐
   │MongoDB │ │ Redis  │
   └────────┘ └────────┘
        │
        ▼
   ┌─────────┐
   │ImageKit │
   └─────────┘
```

---

## 📁 Project Structure

```text
Vibexa/
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   ├── app.routes.jsx
│   │   └── ...
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vercel.json
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middlewares/
│   │   └── ...
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB
- Redis

### 1. Clone the repository

```bash
git clone https://github.com/Yczbot/Vibexa.git
cd Vibexa
```

### 2. Setup the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
REDIS_URL=your_redis_connection_string
```

Start the backend:

```bash
npm start
```

### 3. Setup the Frontend

Open another terminal:

```bash
cd Frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🔌 API

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login a user |
| GET | `/api/auth/get-me` | Get the authenticated user |
| GET | `/api/auth/logout` | Logout the user |

---

## ⚡ Redis

Vibexa uses Redis as an in-memory data store to provide fast access to frequently used data and reduce unnecessary database operations.

```text
Request
   │
   ▼
Redis
   │
   ├── Cache Hit ──────► Return Data
   │
   └── Cache Miss
          │
          ▼
       MongoDB
          │
          ▼
      Store/Cache
          │
          ▼
       Return Data
```

Redis helps improve response speed and reduce the load on the primary database for data that can be cached.

---

## 🔐 Environment Variables

### Frontend

```env
VITE_API_URL=
```

### Backend

```env
PORT=
MONGO_URI=
JWT_SECRET=
IMAGEKIT_PRIVATE_KEY=
REDIS_URL=
```

> Never commit `.env` files or expose private backend credentials in frontend code.

---

## 🌐 Deployment

### Frontend — Vercel

Set the following environment variable:

```env
VITE_API_URL=https://your-backend-url
```

The frontend is configured as a Vite application and uses React Router for client-side routing.

### Backend — Render

Deploy the `Backend` directory as a Node.js Web Service.

Configure the required backend environment variables in Render.

The backend should listen on the port provided by the hosting platform:

```js
const PORT = process.env.PORT || 3000;
```

---

## 🔄 Authentication Flow

```text
User
 │
 ▼
Login / Register
 │
 ▼
React Frontend
 │
 │ POST /api/auth/login
 ▼
Express Backend
 │
 ▼
Authentication
 │
 ▼
Cookie / Session
 │
 ▼
Authenticated Requests
```

---

## 🎯 Future Improvements

- 🤖 Improve facial emotion recognition accuracy
- 🎶 More advanced recommendation algorithms
- ❤️ Like and save songs
- 🎼 Personalized playlists
- 📊 Mood and listening history
- 📱 Improved mobile experience
- 🧠 AI-powered recommendations
- 🎤 Additional ways to detect user mood

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Commit your changes:

```bash
git commit -m "Add your feature"
```

4. Push your branch:

```bash
git push origin feature/your-feature
```

5. Open a Pull Request.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Yug Malviya**

Built with ❤️ and 🎵 using React, Node.js, Express, MongoDB, and Redis.

---

⭐ If you like Vibexa, consider giving the repository a star!
