/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable semi */
console.log("hello in sasho's server");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
//pass string of combine to have it print out logs in certain way
app.use(morgan("combined"));
app.use(bodyParser.json());
//cors  to host  app  on different  servers
app.use(cors());
app.get("/status", (req, res) => {
  res.send({ message: "hello world" });
});
app.listen(process.env.PORT || 8081);
