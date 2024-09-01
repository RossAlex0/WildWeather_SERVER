const express = require("express");
const app = express();
const cors = require('cors');

const { checkConnection } = require('../database/server');

const router = require("./router");

checkConnection();

app.use(cors());

app.use(express.json());

app.use("/api", router);




module.exports = app;