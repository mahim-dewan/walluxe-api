// controllers/subscribe/addSubscriber.controller.controller.js
const Subscriber = require("../../models/subscribe.model");

const addSubscriber = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    // check, is email exists
    const exists = await Subscriber.findOne({ email });

    // send res if email already exists
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "You're already subscribed by this email.",
      });
    }

    const newAdded = await Subscriber.create({ name, email }); // create a new subscriber

    // send success response
    res.status(201).json({
      success: true,
      message: "Thank you for your subscription",
      data: newAdded,
    });
  } catch (err) {
    next(err); // Pass to global error handler
  }
};

module.exports = {
  addSubscriber,
};
