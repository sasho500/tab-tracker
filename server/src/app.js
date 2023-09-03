/* eslint-disable comma-dangle */
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
//requires Mysql Database
const { sequelize } = require("./models");

//pass string of combine to have it print out logs in certain way
app.use(morgan("combined"));
app.use(bodyParser.json());
//cors  to host  app  on different  servers
app.use(cors());

const config = require("./config/config");

require("./register")(app);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Server started on port ${config.port}`);
});
