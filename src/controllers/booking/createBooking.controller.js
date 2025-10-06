// controllers/booking/createBooking.controller.js
const Booking = require("../../models/booking.model");

// POST /api/bookings
const createBooking = async (req, res, next) => {
  try {
    const {
      packageId,
      name,
      email,
      phone,
      area,
      house,
      message,
      startDate, // expecting "DD-MM-YYYY"
      endDate, // expecting "DD-MM-YYYY"
      wallSize,
      costPerSF,
      costTotal
    } = req.body;

    // Convert string dates to Date objects
    const [sDay, sMonth, sYear] = startDate.split("-");
    const [eDay, eMonth, eYear] = endDate.split("-");

    const start = new Date(sYear, sMonth - 1, sDay);
    const end = new Date(eYear, eMonth - 1, eDay);

    // Create booking
    const newBooking = await Booking.create({
      packageId,
      name,
      email,
      phone,
      area,
      house,
      message,
      startDate: start,
      endDate: end,
      wallSize,
      costPerSF,
      costTotal
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (err) {
    next(err); // pass to global error handler
  }
};

module.exports = {
  createBooking,
};
