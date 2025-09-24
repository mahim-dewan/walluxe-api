// models/Accordion.js
const mongoose = require("mongoose");

const accordionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Accordion title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Accordion description is required"],
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports.Accordion = mongoose.model("accordions", accordionSchema);
