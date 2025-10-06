// controllers/team/createTeamMember.controller.js
const Team = require("../../models/team.model");

const createTeamMember = async (req, res, next) => {
  try {
    const { name, designation, email, phone, image } = req.body;

    // Basic validation to ensure required fields are provided
    if (!name || !designation || !email || !phone || !image) {
      return res.status(400).json({
        success: false,
        message: "Name, Designation, Email, Phone, Image are required",
      });
    }
    const exists = await Team.findOne({ email });

    if (exists) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // Create a new member document
    const newTeamMember = new Team({ name, designation, email, phone, image });

    // Save the new document to mongoDB
    const savedMember = await newTeamMember.save();

    // Send success response
    res.status(201).json({
      success: true,
      message: "New team member created",
      data: savedMember,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  createTeamMember,
};
