const login = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).send({ message: "Connexion réussi", user: user });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
