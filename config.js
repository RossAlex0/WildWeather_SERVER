const express = require("express");
const app = express();

//**  Connection à la BDD MongoDB  **\\
const { checkConnection } = require("./database/server");

checkConnection();

//**  Permet de gérer les requêtes provenant d'autres domaines  **\\
const cors = require("cors");

app.use(cors({ credentials: true }));

//**  Permet de lire les données JSON envoyées dans les requêtes  **\\
app.use(express.json());

//**  Route les requêtes API vers le fichier "routes/router.js"  **\\
const router = require("./routes/router");

app.use("/api", router);

//**  Middleware de gestion pour les erreurs liées au serveur  **\\
app.use((err, req, res, next) => {
  console.info(err);
  res.status(500).json({ message: "Server error", error: err.message });
});

module.exports = app;
