const transporter = require("../config/mailer");

const sendBookingMail = async (data) => {
  try {
    await transporter.sendMail({
      from: `"Walluxe Wall Service" <${process.env.SMTP_USER}>`,
      to: data?.email,
      subject: "Walluxe booking confirmation",
      html: `
     <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
        <h2>Hi ${data?.name}, Thank you for choosing us!</h2>
        
        <p><strong>Service:</strong> ${data?.title}</p>
        <p><strong>Date:</strong> ${data?.startDate.toDateString()} to ${data?.endDate.toDateString()} (without Sunday)</p>
        <p><strong>Wall Size:</strong> ${data?.wallSize} square foot</p>
        <p><strong>Cost:</strong> ${data?.price} tk (per square foot)</p>
        <p><strong>Total Payable:</strong> <span style="color: #d63031; font-weight: bold; font-size: 30px;"> ${
          data?.costTotal
        } tk</span></p>

        <p style="color: #d63031; margin: 10px 0" >You have to pay the total amount for confirm booking. Otherwise it will be cancel auto after 24 hours.</p>
        
        <div style="margin-top: 20px;">
          <a 
            href= http://localhost:3000/booking/${data?._id}
            target="_blank" 
            style="display: inline-block; margin-right: 10px; padding: 10px 18px; background-color: #14b879; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;"
          >
            Invoice
          </a> 
          
          <a 
            href="http://localhost:3000/checkout/payment" 
            target="_blank" 
            style="display: inline-block; padding: 10px 18px; background-color: #d63031; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;"
          >
            Pay Now
          </a>
        </div>
      </div>
      `,
    });

    console.log(`📩 Mail sent to ${data.email}`);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
  }
};

module.exports = {
  sendBookingMail,
};
