const nodemailer = require("nodemailer");
require("dotenv").config();

const emailMessage = async (req, res) => {
  // const { senderName, email, subject, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_SERVER,
  //   port: process.env.SMTP_PORT,
  //   secure: false,
  //   auth: {
  //     user: process.env.SMTP_LOGIN,
  //     pass: process.env.SMTP_PASSWORD,
  //   },
  // });

  // const mailOptions = {
  //   from: `${senderName} ${email}`,
  //   to: "luka.matshebelele@gmail.com",
  //   subject: subject,
  //   text: message,
  //   html: `<b>${message}</b>`,
  // };

res.send('hello')

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       res.status(500).send("Can't receive email");
//       console.log(error);
//     } else {
//       res.status(200).send("Email received!");
//       console.log("Received email from", info.accepted);
//     }
//   });
};

module.exports = { emailMessage };
