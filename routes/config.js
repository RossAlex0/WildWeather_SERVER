const express = require("express");
const app = express();
const cors = require('cors');

const { checkConnection } = require('../database/server');

const router = require("./router");

checkConnection();

app.use(cors());
app.use(express.json());
app.use("/api", router);
// Middleware de gestion pour les erreurs liées aux serceurs
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  })

module.exports = app;