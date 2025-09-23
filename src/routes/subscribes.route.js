const express = require("express");
const subscribesRouter = express.Router();

const {allSubscribers,} = require("../controllers/subscribe/getSubscribers.controller");
const {addSubscriber,} = require("../controllers/subscribe/addSubscriber.controller");

// Create a new subscriber
subscribesRouter.post("/", addSubscriber);

// Get all subscribers
subscribesRouter.get("/", allSubscribers);

module.exports = subscribesRouter;
