// controllers/failPayment.controller.js

const Booking = require("../../models/booking.model");
const Payment = require("../../models/payment.model");

/**
 * Handle failed payment responses from SSLCommerz
 */
const failPayment = async (req, res, next) => {
  try {
    const data = req.body;

    // 1️⃣ Find and update the failed payment record
    const payment = await Payment.findOneAndUpdate(
      { tran_id: data.tran_id },
      {
        $set: {
          status: "FAILED",
          bank_tran_id: data.bank_tran_id,
          payment_method: data.card_issuer,
        },
      }
    );

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment record not found.",
      });
    }

    // 2️⃣ Update related booking record
    await Booking.findByIdAndUpdate(
      payment.booking_id,
      { $set: { payment_status: "FAILED", payment_id: payment._id } },
      { new: true, runValidators: true }
    );

    // 3️⃣ Redirect user back to booking page
    res.redirect(`${process.env.DOMAIN}/booking/${payment.booking_id}`);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  failPayment,
};
