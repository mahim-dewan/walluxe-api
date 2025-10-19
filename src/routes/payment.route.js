const express = require("express")
const { initPayment } = require("../controllers/payment/initPayment.controller")
const { successPayment } = require("../controllers/payment/successPayment.controller")
const { failPayment } = require("../controllers/payment/failPayment.controller")
const { cancelPayment } = require("../controllers/payment/cancelPayment.controller")
const paymentRoute = express.Router()

paymentRoute.post("/init",initPayment)
paymentRoute.post("/success",successPayment)
paymentRoute.post("/fail",failPayment)
paymentRoute.post("/cancel",cancelPayment)

module.exports = paymentRoute