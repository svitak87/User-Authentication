const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const server = express();
const getAllUsersRoute = require("../src/routes/getAllUsersRoute");
const registerUserRoute = require("../src/routes/registerUserRoute");

//MIDDLE WARES:
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

//ROUTES:

server.use("/users", getAllUsersRoute);
server.use("/users", registerUserRoute);

module.exports = server;
