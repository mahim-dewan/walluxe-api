// controllers/package/createPackage.controller.js
const Package = require("../../models/package.model");

// Create a new Package
const createPackage = async (req, res, next) => {
  try {
    const {
      title,
      subtitle,
      features,
      price,
      currency,
      category,
      duration,
      materials,
      image,
      rating,
      tags,
    } = req.body;

    // Cross check- Is required filed is available
    if (!title || !price || !features || !category || !image) {
      return res.status(400).json({
        success: false,
        message: "Title, price, features, category, image are required",
      });
    }

    // Make a new document
    const newPackage = new Package({
      title,
      subtitle,
      features,
      price,
      currency,
      category,
      duration,
      materials,
      image,
      rating,
      tags,
    });

    // Create document to MongoDB
    const createdPackage = await newPackage.save();

    // Success response
    res.status(201).json({
      success: true,
      message: "New package is created",
      data: createdPackage,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  createPackage,
};
