// models/payment.model.js
const mongoose = require("mongoose");

/**
 * Payment Schema
 * Stores payment details for a specific booking and package.
 */
const paymentSchema = new mongoose.Schema(
  {
    tran_id: {
      type: String,
      required: true,
      unique: true,
    },

    bank_tran_id: String,

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "BDT",
    },

    status: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED", "CANCELLED"],
      default: "PENDING",
    },

    payment_method: String,

    package_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },

    booking_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
  },

  { timestamps: true }
);

/**
 * TTL Index
 * Automatically removes pending payments after 1 hour (3600 seconds).
 */
paymentSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 3600, // 1 hour
    partialFilterExpression: { status: "PENDING" },
  }
);

// Model
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
