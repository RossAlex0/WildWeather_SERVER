const user = require("../database/models/userSchema");

// const users = [
//     {
//     "firstname": "Alex",
//     "lastname": "Ross",
//     "age": 29,
//     },
//     {
//     "firstname": "Marlene",
//     "lastname": "Ayrault",
//     "age": 28,
//     }
// ]

// const test = async (req, res, next) => {
//       res.send(users);
//   };

const readAll = async(req, res) => {
    try {
      const users = await user.find(); 
      res.json(users); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  module.exports = { readAll };