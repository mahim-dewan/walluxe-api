// routes/booking.route.js
const express = require("express");
const bookingRouter = express.Router();

// Import controllers
const {
  createBooking,
} = require("../controllers/booking/createBooking.controller");
const {
  getAllBooking,
  getSingleBooking,
} = require("../controllers/booking/getBookings.controller");

bookingRouter.post("/", createBooking);
bookingRouter.get("/", getAllBooking);
bookingRouter.get("/:id", getSingleBooking);

module.exports = bookingRouter;
