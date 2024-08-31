const express = require("express");
const app = express();

const { checkConnection } = require('../database/server');

const router = require("./router");

checkConnection();

app.use("/api", router);

app.use(express.json());


module.exports = app;