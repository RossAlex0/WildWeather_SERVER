const user = require("../database/models/userSchema");


const browse = async(req, res) => {
    try {
      const users = await user.find(); 
      res.json(users); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

const add = async (req, res) => {
    try {
      const { name, mail, city, password } = req.body;
      const newUser = new user({ name, mail, city, password });
      await newUser.save();
      res.status(201).json({messsage: 'New user created'},{newUser});
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  };

  module.exports = { browse, add };