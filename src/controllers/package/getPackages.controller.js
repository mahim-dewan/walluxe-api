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

// Get Single Package
const getsinglePackage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const package = await Package.findById(id);

    if (!package)
      return res
        .status(404)
        .json({ success: false, message: "Package item not found" });

    // send success response
    res.status(200).json({ success: true, data: package });
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
  getsinglePackage,
  getFeaturePackages,
  getMediaPackages,
};
