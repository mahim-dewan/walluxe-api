// src/app.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const subscribeRoutes = require("./routes/subscribe.route");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.get("/api", async (req, res) => {
  res.send(
    "<h1 style='color:green; text-align:center ; margin-top:100px; font-family:arial' >Welcome to the Walluxe REST API</h1>"
  );
});

app.use("/api/subscribe", subscribeRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// ----- Centralized Error Handler -----
app.use(errorHandler);

module.exports = app;
