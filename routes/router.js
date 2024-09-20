const express = require("express");
const router = express.Router();

const userActions = require("../controllers/UserActions");
const loginActions = require("../controllers/loginActions");
const logoutActions = require("../controllers/logoutActions");

const { hashPassword, comparePassword } = require("../middleware/password");
const { createToken, verifyToken } = require("../middleware/token");

//  ******* LOG ******* \\

router.post("/login", comparePassword, createToken, loginActions.login);
router.post("/logout", verifyToken, logoutActions.logout);

//  ******* PATH ******* \\

router.get("/users", userActions.browse);
router.get("/users/:id", verifyToken, userActions.read);

router.post("/users", hashPassword, userActions.add);
router.post(
  "/users/password/:id",
  verifyToken,
  loginActions.checkCurrentPassword
);

router.put("/users/:id", verifyToken, userActions.edit);
router.put("/users/password/:id", verifyToken, hashPassword, userActions.edit);

router.delete("/users/:id", verifyToken, userActions.destroy);

module.exports = router;
