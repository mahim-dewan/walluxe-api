// middlewares/error.middleware.js
function errorHandler(err, req, res, next) {
  console.error(err.stack, "gg");

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);

    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message: "Internal Server Error. Please try again later.",
  });
}

module.exports = errorHandler;
