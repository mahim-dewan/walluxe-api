// controllers/serviceArea/getAreas.controller.js
const ServiceArea = require("../../models/serviceArea.model");

// Get all
const getAllServiceAreas = async (req, res, next) => {
  try {
    const areas = await ServiceArea.find();

    return res.status(200).json({
      success: true,
      count: areas.length,
      data: areas,
    });
  } catch (err) {
    next(err);
  }
};

// Get single
const getSingleServiceArea = async (req, res, next) => {
  try {
    const { id } = req.params;
    const area = await ServiceArea.findById(id);

    if (!area) {
      return res.status(404).json({
        success: false,
        message: "Service area not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: area,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  getAllServiceAreas,
  getSingleServiceArea
};
