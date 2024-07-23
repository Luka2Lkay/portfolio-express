const { handleSendEmail } = require("../helperFunctions");

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await handleSendEmail(name, email, subject, message);
    res.status(200).send("Email sent!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { sendEmail };
