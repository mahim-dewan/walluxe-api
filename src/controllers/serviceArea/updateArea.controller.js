// controllers/serviceArea/updateArea.controller.js
const ServiceArea = require("../../models/serviceArea.model");

const updateServiceArea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Update to mongoDB
    const area = await ServiceArea.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );

    // If does't exists
    if (!area) {
      return res.status(404).json({
        success: false,
        message: "Service area not found",
      });
    }

    // Send success response
    return res.status(200).json({
      success: true,
      message: "Service area updated",
      data: area,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  updateServiceArea,
};
