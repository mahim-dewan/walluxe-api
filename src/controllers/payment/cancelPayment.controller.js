// controllers/cancelPayment.controller.js

const Booking = require("../../models/booking.model");
const Payment = require("../../models/payment.model");

/**
 * Handle cancelled payment responses from SSLCommerz
 */
const cancelPayment = async (req, res, next) => {
  try {
    const data = req.body;

    // 1️⃣ Find existing payment record
    const payment = await Payment.findOne({ tran_id: data?.tran_id });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment record not found.",
      });
    }

    // 2️⃣ Update payment status
    await Payment.findOneAndUpdate(
      { tran_id: payment.tran_id },
      { $set: { status: "CANCELLED" } }
    );

    // 3️⃣ Update related booking record
    await Booking.findByIdAndUpdate(payment.booking_id, {
      payment_status: "CANCELLED",
      payment_id: payment._id,
    });

    // 4️⃣ Redirect user to booking page
    res.redirect(`${process.env.DOMAIN}/booking/${payment.booking_id}`);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  cancelPayment,
};
