// controllers/accordion/getAccordion.controller.js
const { Accordion } = require("../../models/accordion.model");

// Get all accordions
const getAllAccordions = async (req, res, next) => {
  try {
    // Get accordions from mongoDB
    const accordions = await Accordion.find().sort({ createdAt: -1 });

    // Send success response to client
    return res.status(200).json({
      success: true,
      count: accordions.length,
      data: accordions,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

// Get single accordion by id
const getSingleAccordion = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find accordion by id
    const accordion = await Accordion.findById(id);

    // Check if exists
    if (!accordion) {
      return res.status(404).json({
        success: false,
        message: "Accordion not found",
      });
    }

    // Send success response to client
    return res.status(200).json({
      success: true,
      data: accordion,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  getAllAccordions,
  getSingleAccordion,
};
