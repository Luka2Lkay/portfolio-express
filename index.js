require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const messageRoute = require("./src/routes/messageRoute");
const port = 3300;

app.use(express.json());
app.use(cors());

const allowedOrigin = "https://portfolio-angular-taupe.vercel.app/portfolio";

app.use((req, res, next) => {
  if (req.origin === allowedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  }

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  next();
});

app.get("/", (req, res) => {
  res.status(200).send("The server is running...");
});

app.use("/email", messageRoute);

app.listen(port, () => console.log(`running in port ${port}`));

module.exports = app;
