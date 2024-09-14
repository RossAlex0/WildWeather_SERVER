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
    const { authTokenWildApp } = req.cookies;

    await jwt.verify(authTokenWildApp, process.env.APP_SECRET);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken, verifyToken };
