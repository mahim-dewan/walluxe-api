// controllers/team/deleteTeamMember.controller.js
const Team = require("../../models/team.model");

const deleteTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;

    const member = await Team.findByIdAndDelete(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Member has been deleted",
      data: member,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = { deleteTeamMember };
