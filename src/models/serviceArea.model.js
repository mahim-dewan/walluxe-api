const { Schema, model } = require("mongoose");

const areaShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Service area name is required"],
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const ServiceArea = model("serviceAreas", areaShema);

module.exports = ServiceArea
