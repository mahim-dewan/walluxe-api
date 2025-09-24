// controllers/accordion/deleteAccordion.controller.js
const { Accordion } = require("../../models/accordion.model");

const deleteAccordion = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find accordion and delete if exists
    const accordion = await Accordion.findByIdAndDelete(id);

    // Check is it exists
    if (!accordion) {
      return res.status(404).json({
        success: false,
        message: "Accordion not found",
      });
    }

    // Send success response to client
    return res.status(200).json({
      success: true,
      message: "Accordion deleted successfully",
      data: accordion,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = { deleteAccordion };
