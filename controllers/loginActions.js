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

module.exports = { login };
