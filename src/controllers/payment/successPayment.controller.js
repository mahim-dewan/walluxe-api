// controllers/payment/successPayment.controller.js

const SSLCommerzPayment = require("sslcommerz-lts");
const Payment = require("../../models/payment.model");
const Booking = require("../../models/booking.model");
const { sendPaymentInvoiceMail } = require("../../services/mail.service");

/**
 * Handle successful payment validation from SSLCommerz
 */
const successPayment = async (req, res, next) => {
  const store_id = process.env.STORE_ID;
  const store_passwd = process.env.STORE_PASS;
  const is_live = false;

  try {
    const data = req.body;

    // 1️⃣ Validate payment with SSLCommerz
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const isValid = await sslcz.validate({ val_id: data.val_id });

    if (isValid.status !== "VALID")
      return res.json({
        success: false,
        message: "Invalid payment validation.",
      });

    // 2️⃣ Update payment record
    const payment = await Payment.findOneAndUpdate(
      { tran_id: data.tran_id },
      {
        $set: {
          status: "PAID",
          bank_tran_id: data.bank_tran_id,
          payment_method: data.card_issuer,
        },
      },
      { new: true, runValidators: true }
    );

    if (!payment)
      return res.json({
        success: false,
        message: "Invalid payment request.Please try again.",
      });

    // 3️⃣ Update related booking record
    const bookingItem = await Booking.findByIdAndUpdate(
      payment.booking_id,
      {
        status: "Confirmed",
        payment_status: "PAID",
        payment_id: payment._id,
      },
      { new: true, runValidators: true }
    );

    // 4️⃣ Send confirmation email with invoice
    sendPaymentInvoiceMail({
      name: bookingItem.name,
      email: bookingItem.email,
      tran_id: payment.tran_id,
      method: payment.payment_method,
      amount: payment.amount,
      date: payment.updatedAt,
    });

    // 5️⃣ Redirect user to booking confirmation page
    res.redirect(`${process.env.DOMAIN}/booking/${payment.booking_id}`);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  successPayment,
};
