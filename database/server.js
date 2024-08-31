require("dotenv").config();

const mongoose = require('mongoose');

const server = {
  DB_NAME: process.env.DB_NAME,
  MONGO_URL: process.env.MONGO_URL
}

// Connection à la base de donnée et sa collection
const checkConnection = () => {
  mongoose.connect(`${server.MONGO_URL}/${server.DB_NAME}`)
  .then(() => console.log(`Connection to the database ${server.DB_NAME} ✅`))
  .catch(err => console.error('Database connection error 🆘', err));
};

module.exports = { checkConnection };