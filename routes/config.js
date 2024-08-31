const express = require("express");
const app = express();
const cors = require('cors');

const { checkConnection } = require('../database/server');

const router = require("./router");

checkConnection();

app.use(cors());

app.use("/api", router);

app.use(express.json());


module.exports = app;