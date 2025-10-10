const { Schema, models, model, default: mongoose } = require("mongoose");
const { sendBookingMail } = require("../services/mail.service");
const Package = require("./package.model");

const bookingSchema = new Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: [true, "Package id is required"],
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Phone number is required"],
    },
    area: {
      type: String,
      trim: true,
      required: [true, "Area is required"],
    },
    house: {
      type: String,
      trim: true,
      required: [true, "House number/address is required"],
    },
    message: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    wallSize: {
      type: Number,
      required: [true, "Wall size is required"],
    },
    workingDays: {
      type: Number,
    },
    costPerSF: {
      type: Number,
      required: [true, "cost per square foot is required"],
    },
    costTotal: {
      type: Number,
      required: [true, "Total cost is required"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

bookingSchema.post("save", async (doc) => {
  const package = await Package.findById(doc.packageId);

  if (package) {
    const booking = doc.toObject();

    const data = {
      name: booking?.name,
      email: booking?.email,
      startDate: booking?.startDate,
      endDate: booking?.endDate,
      wallSize: booking?.wallSize,
      costTotal: booking?.costTotal,
      _id: booking?._id,

      title: package?.title,
      price: package?.price

    };
    sendBookingMail(data);
    console.log(data);
  }
});

const Booking = models.bookings || model("bookings", bookingSchema);

module.exports = Booking;
