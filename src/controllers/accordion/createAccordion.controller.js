// controllers/accordion/createAccordion.controller.js
const { Accordion } = require("../../models/accordion.model");

const createAccordion = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // Check required fields are available
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and Description are required",
      });
    }

    // Create a new accordion document
    const newAccrodion = new Accordion({ title, description });

    // Save to mongoDB
    const createdAccordion = await newAccrodion.save();

    // Send success response to client
    res.status(201).json({
      success: true,
      message: "New accordion is created",
      data: createdAccordion,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};


module.exports = {
    createAccordion
}