// controllers/package/getPackages.controller.js
const Package = require("../../models/package.model");

// Get All Packages
const getAllPackage = async (req, res, next) => {
  try {
    const packages = await Package.find();
    res
      .status(200)
      .json({ success: true, count: packages.length, data: packages });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

// Get Feature Wall Packages
const getFeaturePackages = async (req, res, next) => {
  try {
    const packages = await Package.find({ category: "Feature Wall" });
    res
      .status(200)
      .json({ success: true, count: packages.length, data: packages });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

// Get Feature Wall Packages
const getMediaPackages = async (req, res, next) => {
  try {
    const packages = await Package.find({ category: "Media Wall" });
    res
      .status(200)
      .json({ success: true, count: packages.length, data: packages });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  getAllPackage,
  getFeaturePackages,
  getMediaPackages,
};
