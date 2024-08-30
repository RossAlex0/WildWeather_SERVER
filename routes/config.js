const express = require("express");

const mongoose = require('mongoose');

const app = express();

// app.use(cors());
// const cors = require("cors");

app.use(express.json());

const router = require("./router");
app.use("/api", router);

module.exports = app;