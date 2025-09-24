// models/project.model.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "BDT",
    },

    category: {
      type: String,
      enum: ["Feature Wall", "Media Wall"],
      required: true,
    },

    location: {
      type: String,
      trim: true,
    },

    images: [{ type: String, required: true }],

    features: [{ type: String }],

    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Project = mongoose.model("projects", projectSchema);
