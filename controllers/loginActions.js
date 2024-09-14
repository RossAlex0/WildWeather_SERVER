const login = async (req, res, next) => {
  try {
    res
      .cookie("authTokenWildApp", req.token, {
        httpOnly: true,
      })
      .json({
        message: "Connection successful",
        id: req.user.id,
        name: req.user.name,
        mail: req.user.mail,
        city: req.user.city,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
