// routes/contact.route.js

const express = require("express")
const contactRouter = express.Router()

const { createContact } = require("../controllers/contact/createContact.controller")

contactRouter.post("/", createContact)

module.exports = contactRouter
