const argon2 = require("argon2");

const User = require("../database/models/userSchema");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);

    delete req.body.password;

    req.body.hashedPassword = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
};

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

    const verified = await argon2.verify(user.hashedPassword, password);

    if (verified) {
      next();
    } else {
      res.status(401).send("Wrong password 🆘");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword, comparePassword };
