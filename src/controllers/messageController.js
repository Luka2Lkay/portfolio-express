const { handleSendEmail } = require("../helpers/helperFunctions");

const sendEmail = async (req, res) => {
  const { senderName, email, subject, message } = req.body;

  try {
    await handleSendEmail(senderName, email, subject, message);
    res.status(200).send({response: "Email sent!"});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { sendEmail };
