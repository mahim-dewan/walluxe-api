// middlewares/error.middleware.js
function errorHandler(err, req, res, next) {
  console.error(err.stack, "gg");

  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;
