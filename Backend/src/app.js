const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const authRoutes = require('./routes/auth.routes')
const songRoutes = require('./routes/song.routes')

app.use("/api/auth",authRoutes)
app.use("/api/songs",songRoutes)

module.exports = app