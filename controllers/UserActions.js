const user = require("../database/models/userSchema");


const browse = async(req, res, next) => {
    try {
      const users = await user.find(); 
      res.json(users); 
    } catch (err) {
      next(err)
    }
};

const read = async (req, res) => {
  try {
      const { email } = req.params;
      const user = await user.findOne({ mail: email });

      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(200).json(user);
      }
  } catch (err) {
      next(err)
  }
};

  const add = async (req, res) => {
    try {
        const { name, mail, city, password } = req.body;
        const newUser = new user({ name, mail, city, password });
        await newUser.save();
        console.log('New User:', req.body);
        res.status(201).json({ message: 'New user created' });
    } catch (err) {
        next(err)
    }
};

  module.exports = { browse, add, read };