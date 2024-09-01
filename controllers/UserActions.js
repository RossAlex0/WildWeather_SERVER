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
        console.log('New User:', req.body);
        res.status(201).json({ message: 'New user created' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

  module.exports = { browse, add };