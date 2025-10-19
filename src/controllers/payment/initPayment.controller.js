// controllers/payment/initPayment.controller.js
const SSLCommerzPayment = require("sslcommerz-lts");
const Booking = require("../../models/booking.model");
const Payment = require("../../models/payment.model");

/**
 * Initialize a new payment session with SSLCommerz
 */
const initPayment = async (req, res, next) => {
  const store_id = process.env.STORE_ID;
  const store_passwd = process.env.STORE_PASS;
  const is_live = false;
  const tran_id = new Date().getTime();

  try {
    const body = req.body;

    // 1️⃣ Find related booking
    const bookingItem = await Booking.findById(body.booking_id);
    if (!bookingItem) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found." });
    }

    // 2️⃣ Prevent re-payment if already completed
    if (bookingItem?.payment_status === "PAID") {
      return res.json({ success: false, message: "Booking already paid." });
    }

    // 3️⃣ Remove previous pending or cancelled payments
    await Payment.deleteMany({
      booking_id: bookingItem?._id,
      status: { $in: ["PENDING", "CANCELLED"] },
    });

    // 4️⃣ Prepare SSLCommerz payment data
    const data = {
      total_amount: bookingItem.costTotal,
      currency: "BDT",
      tran_id,
      success_url: `${process.env.BASE_URL}/payments/success`,
      fail_url: `${process.env.BASE_URL}/payments/fail`,
      cancel_url: `${process.env.BASE_URL}/payments/cancel`,
      ipn_url: `${process.env.BASE_URL}/payments/ipn`,
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Wall Service",
      product_profile: "general",
      cus_name: bookingItem.name,
      cus_email: bookingItem.email,
      cus_add1: "Dhaka",
      cus_add2: bookingItem.house,
      cus_city: bookingItem.area,
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: bookingItem.phone,
      cus_fax: bookingItem.phone,
      ship_name: bookingItem.name,
      ship_add1: "Dhaka",
      ship_add2: bookingItem.house,
      ship_city: bookingItem.area,
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
      package_id: bookingItem.packageId,
      booking_id: bookingItem._id,
    };

    // 5️⃣ Initialize payment session
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(data);

    // 6️⃣ Save new payment record
    const newPayment = new Payment({
      tran_id,
      amount: bookingItem.costTotal,
      currency: bookingItem.currency,
      booking_id: body.booking_id,
      package_id: body.package_id,
    });

    await newPayment.save();

    // 7️⃣ Respond with payment gateway URL
    res
      .status(200)
      .json({ success: true, url: apiResponse.GatewayPageURL, tran_id });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  initPayment,
};
