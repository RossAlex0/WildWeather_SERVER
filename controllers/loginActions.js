const login = async (req, res, next) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
