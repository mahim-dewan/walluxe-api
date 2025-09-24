// controllers/project/updateProject.controller.js
const { Project } = require("../../models/project.model");

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Schema validation check
    });

    if (!updatedProject)
      res.status(404).json({ success: false, message: "Project not found" });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  updateProject,
};
