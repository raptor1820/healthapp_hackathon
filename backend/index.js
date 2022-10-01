const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
env.config({
  path: "./config.env",
});

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.get("/", (req, res) => {
  res.send("test");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  if (err) console.log(err);
  else console.log("server listening");
});
