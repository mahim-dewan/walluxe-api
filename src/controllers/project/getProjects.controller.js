// controllers/project/getProjects.controller.js
const { Project } = require("../../models/project.model");

// Get All Projects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

// Get Single Project
const getSingleProject = async (req, res, next) => {
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
    next(err); // Pass to global error handler
  }
};

// Get Recent Project
const getRecentProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }).limit(5);

    res
      .status(200)
      .json({ success: true, count: projects.length, data: projects });
  } catch (err) {
   next(err); // Pass to global error handler
  }
};

module.exports = {
  getAllProjects,
  getSingleProject,
  getRecentProjects,
};
