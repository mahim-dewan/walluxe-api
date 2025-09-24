// routes/team.route.js
const express = require("express")
const teamMembersRouter = express.Router()

const { getTeamMembers, getSingleTeamMember } = require("../controllers/team/getTeams.controller")
const { createTeamMember } = require("../controllers/team/createTeamMember.controller")
const { updateTeamMember } = require("../controllers/team/updateTeamMember.controller")
const { deleteTeamMember } = require("../controllers/team/deleteTeamMember.controller")

teamMembersRouter.post("/",createTeamMember)
teamMembersRouter.get("/",getTeamMembers)
teamMembersRouter.get("/:id",getSingleTeamMember)
teamMembersRouter.put("/:id",updateTeamMember)
teamMembersRouter.delete("/:id",deleteTeamMember)

module.exports = teamMembersRouter