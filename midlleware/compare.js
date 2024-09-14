const User = require("../database/models/userSchema");

const comparePassword = async (req, res, next) => {
  try {
    const { mail, password } = req.body;
    const user = await User.readByEmail(mail);

    if (!user) {
      res.status(401).send("User not found 🆘");
    }

    req.user = {
      id: user.id,
      name: user.name,
      mail: user.mail,
      city: user.city,
    };

    if (user.password === password) {
      next();
    } else {
      res.status(401).send("Wrong password 🆘");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { comparePassword };
