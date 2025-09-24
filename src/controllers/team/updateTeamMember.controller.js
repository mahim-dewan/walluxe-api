// controllers/team/updateTeamMember.controller.js
const Team = require("../../models/team.model");

const updateTeamMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // find is member exists
    const member = await Team.findById(id);
    if (!member) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found" });
    }

    // Update to MongoDB
    const updatedMember = await Team.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Schema validation check
    });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data: updatedMember,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  updateTeamMember,
};
