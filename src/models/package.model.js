const { Schema, model, models } = require("mongoose");

const packageSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Package title is required"],
    },
    subtitle: {
      type: String,
      trim: true,
      maxlength: [100, "Subtitle length should be less than 100 character"],
    },
    features: [
      {
        type: String,
        trim: true,
        required: [true, "Minimum 1 feature are required"],
      },
    ],
    price: {
      type: Number,
      trim: true,
      required: [true, "Price is required"],
    },
    currency: {
      type: String,
      trim: true,
      default: "USD",
    },
    category: {
      type: String,
      enum: ["Feature Wall", "Media Wall"],
      required: [true, "Category is required"],
    },
    duration: {
      type: Number,
      default: 3,
    },
    materials: [String],
    image: {
      type: String,
      trim: true,
      required: [true, "Image is required"],
    },
    rating: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    tags: [
      {
        type: String, // SEO keywords
        trim: true,
      },
    ],
    isPopular: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Package = models.Package || model("packages", packageSchema);

module.exports = Package;
