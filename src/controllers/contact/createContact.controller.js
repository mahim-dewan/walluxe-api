// controllers/contact/createContact.controller.js

const Contact = require("../../models/contact.model");

const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    const newContact = new Contact({ name, email, phone, message });

    // Save to mongoDB
    const createdContact = await newContact.save();

    // send final success response
    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: createdContact,
    });
  } catch (err) {
    console.error("Error creating contact:", err);
    next(err); // pass to global error handler
  }
};

module.exports = {
  createContact,
};
