const users = [
    {
    "firstname": "Alex",
    "lastname": "Ross",
    "age": 29,
    },
    {
    "firstname": "Marlene",
    "lastname": "Ayrault",
    "age": 28,
    }
]

const test = async (req, res, next) => {
      res.send(users);
  };

  module.exports = { test };