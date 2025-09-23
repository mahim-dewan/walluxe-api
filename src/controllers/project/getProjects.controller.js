const { Project } = require("../../models/projects.model");
const { find } = require("../../models/subscribe.model");

// Get All Projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    // Send error response to client
    res.status(400).json({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

// Get Single Project
const getSingleProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project)
      res
        .status(404)
        .json({ success: false, message: "This project doesn't exists" });

    // send success response
    res.status(200).json({ success: true, data: project });
  } catch (err) {
    // Send error response to client
    res.status(400).json({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

// Get Recent Project
const getRecentProjects = async (req, res) => {
  try {

    const projects = await Project.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json({ success: true,count:projects.length, data: projects });

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err?.message || "Something went wrong",
    });
  }
};

module.exports = {
  getAllProjects,
  getSingleProject,
  getRecentProjects,
};
