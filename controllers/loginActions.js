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

const loadUserCookie = async (req, res, next) => {
  try {
    const user = {
      id: req.decoded.id,
      name: req.decoded.name,
      mail: req.decoded.mail,
      city: req.decoded.city,
    };

    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, loadUserCookie };
