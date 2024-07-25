const express = require("express");
const cors = require("cors");
const app = express();
const messageRoute = require("./src/routes/messageRoute");
require("dotenv").config();

const port = 3300;

app.use(express.json());
app.use(cors());

const allowedOrigin = 'http://localhost:4200'; // Replace with your frontend origin

app.use((req, res, next) => {
  if (req.origin === allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  }
  
  next();
});

// app.use((_req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.status(200).send("The server is running...");
});

app.use("/email", messageRoute);

app.listen(port, () => console.log(`running in port ${port}`));

module.exports = app;
