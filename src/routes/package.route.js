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
  getMediaPackages,
} = require("../controllers/package/getPackages.controller");

packageRouter.post("/", createPackage);
packageRouter.get("/", getAllPackage);
packageRouter.get("/feature-walls", getFeaturePackages);
packageRouter.get("/media-walls", getMediaPackages);
packageRouter.get("/:id", getsinglePackage);

module.exports = packageRouter;
