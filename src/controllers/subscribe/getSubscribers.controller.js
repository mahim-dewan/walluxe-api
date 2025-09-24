// controllers/subscribe/getSubscribers.controller.js
const Subscriber = require("../../models/subscribe.model");

// Get all Subscribers
const allSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find();
    res
      .status(200)
      .json({ success: true, count: subscribers.length, data: subscribers });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  allSubscribers,
};
