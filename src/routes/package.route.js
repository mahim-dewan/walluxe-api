// routes/package.route.js
const express = require("express")
const packageRouter = express.Router()

const { createPackage } = require("../controllers/package/createPackage.controller")
const { getAllPackage, getFeaturePackages,  } = require("../controllers/package/getPackages.controller")

packageRouter.post("/", createPackage)
packageRouter.get("/", getAllPackage)
packageRouter.get("/feature-walls", getFeaturePackages)


module.exports = packageRouter