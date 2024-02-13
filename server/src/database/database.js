require("dotenv").config();

const { USER, PASSWORD, HOST, PORT_DB, BDD } = process.env;

const { Sequelize } = require("sequelize");
const UserModel = require('../models/userModel')

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${BDD}`,
  { logging: false }
);

UserModel(database);

const {User} = database.models

module.exports = {
    database,
    ...database.models
}
