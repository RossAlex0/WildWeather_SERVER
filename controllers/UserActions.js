const User = require("../database/models/userSchema");

const browse = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userFound = await User.findById({ _id: id });
    if (!userFound) {
      res.status(404).send("User not found");
    }

    res.status(200).send(userFound);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, city, mail, hashedPassword } = req.body;

    if (name) {
      await User.findByIdAndUpdate(
        id,
        { name },
        { new: true, runValidators: true }
      );
    }
    if (mail) {
      await User.findByIdAndUpdate(
        id,
        { mail },
        { new: true, runValidators: true }
      );
    }
    if (city) {
      await User.findByIdAndUpdate(
        id,
        { city },
        { new: true, runValidators: true }
      );
    }
    if (hashedPassword) {
      await User.findByIdAndUpdate(
        id,
        { hashedPassword },
        { new: true, runValidators: true }
      );
    }
    res.status(200).send(`Utilisateur mis à jour avec succès : ${id}`);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  try {
    const { name, mail, city, hashedPassword } = req.body;
    const newUser = new User({ name, mail, city, hashedPassword });
    await newUser.save();

    res.status(201).send(`New user created : ${newUser}`);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).send("User not found");
    }

    res.status(200).send("User deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, edit, add, destroy };
