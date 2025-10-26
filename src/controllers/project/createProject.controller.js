// controllers/project/createProject.controller.js
const { Project } = require("../../models/project.model");

const createProject = async (req, res, next) => {
  try {
    // Destructure fields from request body
    const {
      title,
      subtitle,
      description,
      category,
      images,
      features,
      materials,
    } = req.body;

    // Basic validation to ensure required fields are provided
    if (
      !title ||
      !subtitle ||
      !(images.length > 2) ||
      !category ||
      !features ||
      !materials ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Title, subtitle, description, category, features, materials, and at least 3 images are required.",
      });
    }

    // Create a new Project document
    const newProject = new Project({
      title,
      subtitle,
      description,
      category,
      images,
      features,
      materials,
    });

    // Save the new Project to mongoDB
    const createdProject = await newProject.save();

    // Send success response with created project
    res.status(201).json({
      success: true,
      message: "Wall project created successfully",
      data: createdProject,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  createProject,
};
