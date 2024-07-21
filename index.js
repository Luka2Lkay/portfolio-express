const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const port = 3300;

app.use(express);
app.use(cors);


app.get("/", (_req, res) => {
  res.send("The server is running!");
});

app.listen(port, () => console.log(`running in port ${port}`));

module.exports = app;