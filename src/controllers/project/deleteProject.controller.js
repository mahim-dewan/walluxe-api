const { Project } = require("../../models/projects.model");

const deleteProject = async (req, res) => {
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
    // Send error response to client
    res.status(400).json({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

module.exports = {
  deleteProject,
};
