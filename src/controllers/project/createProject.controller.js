const { Project } = require("../../models/projects.model");

const createProject = async (req, res) => {
  try {
    // Destructure fields from request body
    const {
      title,
      subtitle,
      description,
      price,
      category,
      location,
      images,
      features,
      isPopular,
    } = req.body;

    // Basic validation to ensure required fields are provided
    if (!title || !price || !images || !category) {
      return res.status(400).json({
        success: false,
        message:
          "Title, description, price, and at least one image are required.",
      });
    }

    // Create a new Project document
    const newProject = new Project({
      title,
      subtitle,
      description,
      price,
      category,
      location,
      images,
      features,
      isPopular,
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
    // Send error response to client
    res.status(400).json({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

module.exports = {
  createProject,
};
