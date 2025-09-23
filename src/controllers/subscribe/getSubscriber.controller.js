const Subscriber = require("../../models/subscribe.model");

// Get all Subscribers
const allSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find();
  res.status(200).json({ data: subscribers });
};

module.exports = {
  allSubscribers,
};
