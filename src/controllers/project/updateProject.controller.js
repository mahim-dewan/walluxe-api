const { Project } = require("../../models/projects.model");

const updateProject = async (req, res) => {
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
    // Send error response to client
    res.status(400).json({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

module.exports = {
  updateProject,
};
