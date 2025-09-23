// src/app.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error.middleware");
const subscribesRouter = require("./routes/subscribes.route");
const projectsRouter = require("./routes/projects.route");

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

app.use("/api/subscribes", subscribesRouter);
app.use("/api/projects", projectsRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// ----- Centralized Error Handler -----
app.use(errorHandler);

module.exports = app;
