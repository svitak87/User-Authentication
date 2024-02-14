const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const server = express();
const getAllUsersRoute = require("../src/routes/getAllUsersRoute");
const registerUserRoute = require("../src/routes/registerUserRoute");
const usersLoginRoute = require('./routes/loginUserRoute');
const forgotPasswordRoute = require('./routes/forgotPasswordRoute');
const updatePasswordRoute = require('../src/routes/updatePasswordRoute');

//MIDDLE WARES:
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

//ROUTES:

server.use("/users", getAllUsersRoute);
server.use("/users", registerUserRoute);
server.use("/users", usersLoginRoute);
server.use("/users", forgotPasswordRoute);
server.use("/users", updatePasswordRoute);

module.exports = server;
