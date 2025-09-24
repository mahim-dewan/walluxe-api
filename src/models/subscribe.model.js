// models/subscribe.model.js
const { Schema, model } = require("mongoose");

const subscriberSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Subscriber = model("subscribers", subscriberSchema);

module.exports = Subscriber;
