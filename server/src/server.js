const express = require('express');
const morgan = require("morgan");
const server = express();


//MIDDLE WARES:
server.use(morgan("dev"));
server.use(express.json());


module.exports = server;