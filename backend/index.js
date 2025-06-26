import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS settings to support frontend on localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend
    credentials: true, // Allow sending cookies
  })
);

// Middlewares
app.use(express.json()); // JSON body parser
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/v1/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🌍 CareerCompass API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
