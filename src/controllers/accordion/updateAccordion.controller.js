// controllers/accordion/updateAccordion.controller.js
const { Accordion } = require("../../models/accordion.model");

const updateAccordion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // find and update accordion if exists
    const accordion = await Accordion.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true }
    );

    // Check is it exists
    if (!accordion) {
      return res.status(404).json({
        success: false,
        message: "Accordion not found",
      });
    }

    // Send succes response to client
    return res.status(200).json({
      success: true,
      message: "Accordion updated successfully",
      data: accordion,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = { updateAccordion };
