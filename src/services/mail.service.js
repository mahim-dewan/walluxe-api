const transporter = require("../config/mailer");

// Booking confirmation mail
const sendBookingMail = async (data) => {
  try {
    const mailOptions = {
      from: `"Walluxe Wall Service" <${process.env.SMTP_USER}>`,
      to: data?.email,
      subject: "Walluxe booking confirmation",
      html: `
     <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
        <h2>Hi ${data?.name}, Thank you for choosing us!</h2>
        
        <p><strong>Service:</strong> ${data?.title}</p>
        <p><strong>Date:</strong> ${data?.startDate.toDateString()} to ${data?.endDate.toDateString()} (without Sunday)</p>
        <p><strong>Wall Size:</strong> ${data?.wallSize} square foot</p>
        <p><strong>Booking Status:</strong> Pending </p>
        <p><strong>Cost:</strong> ${data?.price} tk (per square foot)</p>
        <p><strong>Total Payable:</strong> <span style="color: #d63031; font-weight: bold; font-size: 30px;"> ${
          data?.costTotal
        } tk</span></p>

        <p style="color: #d63031; margin: 10px 0" >You have to pay the total amount to confirm booking. Otherwise it will be cancel auto after 24 hours.</p>
        
        <div style="margin-top: 20px;">
          <a 
            href= ${process.env.DOMAIN}/booking/${data?._id}
            target="_blank" 
            style="display: inline-block; margin-right: 10px; padding: 10px 18px; background-color: #14b879; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;"
          >
            Invoice
          </a> 
          
          <a 
            href= ${process.env.DOMAIN}/booking/${data?._id}
            target="_blank" 
            style="display: inline-block; padding: 10px 18px; background-color: #d63031; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;"
          >
            Make Payment
          </a>
        </div>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`📩 Mail sent to ${data.email}`);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
  }
};

// Payment Invoice
const sendPaymentInvoiceMail = async (data) => {
  try {
    const mailOptions = {
      from: `"Walluxe Payment" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Your Payment Invoice`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
          <h2>✅ Payment Successful</h2>
          <p>Hi <strong>${data.name}</strong>,</p>
          <p>Thank you for your payment. Here’s your invoice summary:</p>

          <table style="border-collapse:collapse; border: 1px solid #161616ff; width:100%; margin-top:10px;">
            <tr>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;"><strong>Transaction ID:</strong></td>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;">${
                data.tran_id
              }</td>
            </tr>
            <tr>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;"><strong>Payment Method:</strong></td>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;">${
                data.method
              }</td>
            </tr>
            <tr>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;"><strong>Amount Paid:</strong></td>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;">${
                data.amount
              } BDT</td>
            </tr>
            <tr>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;"><strong>Payment Date:</strong></td>
              <td style="padding: 10px; text-align: left; border: 1px solid #161616ff;">${data.date.toLocaleString()}</td>
            </tr>
          </table>

          <p style="margin-top:20px;">We truly appreciate your trust in <b>Walluxe</b>.</p>
          <p>— Walluxe Support Team</p>
        </div>
      `,
    };
    await transporter.sendMail(mailOptions);
    console.log("✅ Payment invoice sent to:", data.email);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
  }
};

module.exports = {
  sendBookingMail,
  sendPaymentInvoiceMail,
};
