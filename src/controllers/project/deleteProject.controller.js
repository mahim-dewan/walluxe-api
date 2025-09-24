// controllers/project/deleteProject.controller.js
const { Project } = require("../../models/project.model");

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject)
      res.status(404).json({ success: false, message: "Project not found" });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Project has been deleted",
      data: deletedProject,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  deleteProject,
};
