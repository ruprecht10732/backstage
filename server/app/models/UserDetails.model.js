const Sequelize = require("sequelize");
const db = require("../config/database");

const UserDetails = db.define("user_details", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  naam: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  achterNaam: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  geboorteDatum: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nationaliteit: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobiel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  geslacht: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hire_date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = UserDetails;
