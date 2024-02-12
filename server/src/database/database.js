require("dotenv").config();

const { USER, PASSWORD, HOST, PORT_DB, BDD } = process.env;

const { Sequelize } = require("sequelize");

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${BDD}`,
  { logging: false }
);

module.exports = {
    database
}
