// models/project.model.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    subtitle: {
      type: String,
      trim: true,
      required: [true, "Subtitle is required"],
    },

    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },

    category: {
      type: String,
      enum: ["Feature Wall", "Media Wall"],
      required: [true, "Category is required"],
    },

    images: [
      { type: String, required: [true, "Minimum 3 images are required"] },
    ],

    features: [{ type: String, required: [true, "Features are required"] }],

    materials: [{ type: String, required: [true, "Features are required"] }],

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
