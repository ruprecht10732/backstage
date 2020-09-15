const Sequelize = require("sequelize");
const db = require("../config/database");

const Login = db.define("logins", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  wachtwoord: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Login;
