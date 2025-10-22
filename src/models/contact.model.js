// models/contact.model.js

const mongoose = require("mongoose");
const { sendContactMessage } = require("../services/mail.service");

/**
 * Contact Schema
 * Represents a customer's message.
 */
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [5, "Message must be at least 5 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Post-save hook
 * Sends a contact message email from customer.
 */
contactSchema.post("save", async (data) => {
  sendContactMessage({
    name: data.name,
    email: data.email,
    phone: data?.phone,
    message: data.message,
  });
});

// Model
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
