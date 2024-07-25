require("dotenv").config();
const { transporter } = require("../config");

const handleSendEmail = async (name, email, subject, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${name} - ${subject}`,
      html: `<b>Email: ${email}</b> <br> ${message}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { handleSendEmail };
