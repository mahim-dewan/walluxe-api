// routes/package.route.js
const express = require("express");
const packageRouter = express.Router();

const {
  createPackage,
} = require("../controllers/package/createPackage.controller");
const {
  getAllPackage,
  getFeaturePackages,
  getsinglePackage,
} = require("../controllers/package/getPackages.controller");

packageRouter.post("/", createPackage);
packageRouter.get("/", getAllPackage);
packageRouter.get("/feature-walls", getFeaturePackages);
packageRouter.get("/:id", getsinglePackage);

module.exports = packageRouter;
