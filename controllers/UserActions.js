const User = require("../database/models/userSchema");

const browse = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const { email } = req.params;
    const userFound = await User.findOne({ mail: email });

    if (!userFound) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(userFound);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, city, hashedPassword } = req.body;

    const userFound = await User.findById(id);
    if (!userFound) {
      res.status(404).json({ message: "User not found" });
    }

    await userFound.update(name, city, hashedPassword);

    res
      .status(200)
      .json({ message: "Utilisateur mis à jour avec succès", userFound });
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { name, mail, city, password } = req.body;
    const newUser = new User({ name, mail, city, password });
    await newUser.save();
    console.log("New User:", req.body);
    res.status(201).json({ message: "New user created" });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, edit, add };
