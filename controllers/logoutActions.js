const logout = async (req, res, next) => {
  try {
    res.clearCookie("authTokenWildApp");
    res.send("Successful logout");
  } catch (error) {
    next(error);
  }
};

module.exports = { logout };
