// src/app.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/error.middleware");

// all imported routes
const subscribesRouter = require("./routes/subscribe.route");
const projectsRouter = require("./routes/project.route");
const teamMembersRouter = require("./routes/team.route");
const serviceAreaRouter = require("./routes/serviceArea.route");
const accordionRouter = require("./routes/accordion.route");
const packageRouter = require("./routes/package.route");
const bookingRouter = require("./routes/booking.route");
const paymentRoute = require("./routes/payment.route");
const contactRouter = require("./routes/contact.route");

const app = express();

// -------------------- Middlewares -------------------- //
app.use(express.urlencoded({ extended: true })); // ✅ for form data
app.use(express.json());
app.use(cors());

// -------------------- Database -------------------- //
connectDB();

// -------------------- Routes -------------------- //

// API Welcome route
app.get("/api", async (req, res) => {
  res.send(
    "<h1 style='color:green; text-align:center ; margin-top:100px; font-family:arial' >Welcome to the Walluxe REST API</h1>"
  );
});

// Modular API routes
app.use("/api/subscribes", subscribesRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/teams", teamMembersRouter);
app.use("/api/serviceAreas", serviceAreaRouter);
app.use("/api/accordions", accordionRouter);
app.use("/api/packages", packageRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/payments", paymentRoute);
app.use("/api/contacts", contactRouter);

// -------------------- 404 Handler -------------------- //
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// -------------------- Centralized Error Handler -------------------- //
app.use(errorHandler);

module.exports = app;
