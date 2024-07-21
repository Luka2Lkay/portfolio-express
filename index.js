const express = require("express");
const cors = require("cors");
const app = express();
const messageRoute = require("./src/routes/messageRoute");
const { emailMessage } = require("./src/controllers/messageController");
require("dotenv").config();

const port = 3300;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("The server is running...");
});

app.use("/email", messageRoute);

app.listen(port, () => console.log(`running in port ${port}`));

module.exports = app;
