// controllers/serviceArea/.controller.js
const ServiceArea = require("../../models/serviceArea.model");

const createServiceArea = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Check if already exists
    const exists = await ServiceArea.findOne({ name });

    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "This city already added" });
    }

    // Create a new city
    const serviceArea = await ServiceArea.create({ name });

    // Send success response
    return res.status(201).json({
      success: true,
      message: "New service area created",
      data: serviceArea,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  createServiceArea,
};
