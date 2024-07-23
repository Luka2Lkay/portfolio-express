const express = require("express");
const router = express.Router();
const {sendEmail} = require("../controllers/messageController")

router.post("/send-message", sendEmail)

module.exports = router;