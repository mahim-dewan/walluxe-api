const express = require("express");
const subscribeRoutes = express.Router();

const {allSubscribers,} = require("../controllers/subscribe/getSubscriber.controller");
const {addSubscriber,} = require("../controllers/subscribe/addSubscriber.controller");

// Create a new subscriber
subscribeRoutes.post("/add-subscriber", addSubscriber);

// Get all subscribers
subscribeRoutes.get("/get-subscribers", allSubscribers);

module.exports = subscribeRoutes;
