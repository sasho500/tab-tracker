/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const congig = require("../config/config");
const { config } = require("process");
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

module.exports = db;
