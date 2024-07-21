const nodemailer = require("nodemailer");
require("dotenv").config();

const emailMessage = (req, res) => {
  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_LOGIN,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  
};

module.exports = {emailMessage}