const Subscriber = require("../../models/subscribe.model");

// Get all Subscribers
const allSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find();
  res.status(200).json({ success:true, count: subscribers.length, data: subscribers });
};

module.exports = {
  allSubscribers,
};
