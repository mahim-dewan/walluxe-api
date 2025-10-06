// controllers/booking/getBookings.controller.js
const { json } = require("express");
const Booking = require("../../models/booking.model");

// Get all bookings
const getAllBooking = async (req, res, next) => {
  try {
    // Get bookings from MongoDB
    const bookings = await Booking.find();

    // Send success response to client
    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

// Get single booking
const getSingleBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    // check is found booking item ?
    if (!booking)
      return res
        .status(404)
        .json({ success: false, message: "Booking item not found" });

    // Send success response to client
    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (err) {
    next(err); // pass to global error handler
  }
};

module.exports = {
  getAllBooking,
  getSingleBooking,
};
