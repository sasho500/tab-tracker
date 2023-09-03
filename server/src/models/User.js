/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
module.exports = (sequelize, DataTypes) => {
  sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  });
};
