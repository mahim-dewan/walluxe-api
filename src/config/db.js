// config/db.js

const mongoose = require("mongoose");

/**
 * Connects to MongoDB using Mongoose.
 * Automatically builds indexes in development and disables them in production.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true, // Only build indexes automatically in dev
      serverSelectionTimeoutMS: 10000, // Fail fast if unable to connect
    });

    console.log(`✅ MongoDB connected successfully`);
  } catch (err) {
    console.error(`❌ MongoDB connection failed: ${err.message}`);
    process.exit(1); // Exit process if connection fails
  }

  // Optional: log mongoose connection events for debugging
  mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("🔄 MongoDB reconnected");
  });
};

module.exports = connectDB;
