// controllers/serviceArea/deleteArea.controller.js
const ServiceArea = require("../../models/serviceArea.model");

const deleteServiceArea = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find and Delete from mongoDB
    const area = await ServiceArea.findByIdAndDelete(id);

    // check is exists area
    if (!area) {
      return res.status(404).json({
        success: false,
        message: "Service area not found",
      });
    }

    // Send success response to client
    return res.status(200).json({
      success: true,
      message: "Service area deleted successfully",
      data: area,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  deleteServiceArea,
};
