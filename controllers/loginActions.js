const argon2 = require("argon2");

const User = require("../database/models/userSchema");

const login = async (req, res, next) => {
  try {
    res.json({
      message: "Connection successful",
      id: req.user.id,
      name: req.user.name,
      mail: req.user.mail,
      city: req.user.city,
      token: req.token,
    });
  } catch (error) {
    next(error);
  }
};

const checkCurrentPassword = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.info("id", id);
    const { password } = req.body;
    console.info("step2", password);
    const userFound = await User.findById({ _id: id });
    console.info("user", userFound);
    if (!userFound) {
      res.status(401).send("User not found 🆘");
    }

    const verified = await argon2.verify(userFound.hashedPassword, password);
    console.info("step 3", verified);
    if (verified) {
      res.sendStatus(200);
    } else {
      res.status(401).send("Wrong password 🆘");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { login, checkCurrentPassword };
