// routes/serviceArea.route.js
const express = require("express")
const serviceAreaRouter = express.Router()

const { createServiceArea } = require("../controllers/serviceArea/createArea.controller")
const { getAllServiceAreas, getSingleServiceArea } = require("../controllers/serviceArea/getAreas.controller")
const { updateServiceArea } = require("../controllers/serviceArea/updateArea.controller")
const { deleteServiceArea } = require("../controllers/serviceArea/deleteArea.controller")


serviceAreaRouter.post("/", createServiceArea)
serviceAreaRouter.get("/", getAllServiceAreas)
serviceAreaRouter.get("/:id", getSingleServiceArea)
serviceAreaRouter.put("/:id", updateServiceArea)
serviceAreaRouter.delete("/:id", deleteServiceArea)

module.exports = serviceAreaRouter