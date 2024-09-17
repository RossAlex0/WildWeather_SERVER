const jwt = require("jsonwebtoken");

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;

    const token = await jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1y",
    });

    req.token = token;

    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const { token } = req.body;

    await jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send("Invalid token");
      }
      req.decoded = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken, verifyToken };
