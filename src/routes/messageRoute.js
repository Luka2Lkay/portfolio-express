const express = require("express");
const router = express.Router();
const {emailMessage} = require("../controllers/messageController")

router.post("/send-message", emailMessage)

module.exports = router;