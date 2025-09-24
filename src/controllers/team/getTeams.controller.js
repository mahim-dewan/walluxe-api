// controllers/team/getSingleTeamMember.controller.js
const Team = require("../../models/team.model");

// Get all members
const getTeamMembers = async (req, res, next) => {
  try {
    const teams = await Team.find();
    res.status(200).json({ success: true, count: teams.length, data: teams });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

// Get a single member
const getSingleTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;

    const member = await Team.findById(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: member,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  getTeamMembers,
  getSingleTeamMember,
};
