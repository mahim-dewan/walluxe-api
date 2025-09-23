const Subscriber = require("../../models/subscribe.model");

const addSubscriber = async (req, res) => {
  try {
    const { name, email, image } = req.body;

    // check, is email exists
    const exists = await Subscriber.findOne({ email });

    // send res if email already exists
    if (exists)
      res
        .status(400)
        .json({
          status: "bad request",
          message: "This email already has been subscribed",
        });

    const newAdded = await Subscriber.create({ name, email, image }); // create a new subscriber

    // send success response
    res.status(201).json({
      status: "success",
      message: "Thank you for you subscription",
      data: newAdded,
    });
  } catch (err) {
    res.status(400).json({ message: err?.message || "Something went wrong" });
  }
};

module.exports = {
  addSubscriber,
};
