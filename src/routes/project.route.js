// routes/project.route.js
const express = require("express")
const projectsRouter = express.Router()

const { createProject } = require("../controllers/project/createProject.controller")
const { getAllProjects, getSingleProject, getRecentProjects } = require("../controllers/project/getProjects.controller")
const { updateProject } = require("../controllers/project/updateProject.controller")
const { deleteProject } = require("../controllers/project/deleteProject.controller")


projectsRouter.post("/", createProject)
projectsRouter.get("/", getAllProjects)
projectsRouter.get("/recent-projects", getRecentProjects)
projectsRouter.get("/:id", getSingleProject)
projectsRouter.put("/:id", updateProject)
projectsRouter.delete("/:id", deleteProject)

module.exports = projectsRouter