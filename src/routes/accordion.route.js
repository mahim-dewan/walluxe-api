// routes/accordion.route.js
const express = require("express")
const accordionRouter = express.Router()

const { createAccordion } = require("../controllers/accordion/createAccordion.controller")
const { getAllAccordions, getSingleAccordion } = require("../controllers/accordion/getAccordion.controller")
const { updateAccordion } = require("../controllers/accordion/updateAccordion.controller")
const { deleteAccordion } = require("../controllers/accordion/deleteAccordion.controller")


accordionRouter.post("/", createAccordion)
accordionRouter.get("/", getAllAccordions)
accordionRouter.get("/:id", getSingleAccordion)
accordionRouter.put("/:id", updateAccordion)
accordionRouter.delete("/:id", deleteAccordion)

module.exports = accordionRouter