const express = require("express");
const router = express.Router();

const userActions = require("../controllers/UserActions");

const loginActions = require("../controllers/loginActions");

const { hashPassword, comparePassword } = require("../midlleware/password");

//  ******* PATH ******* \\

router.post("/login", comparePassword, loginActions.login);

router.get("/users", userActions.browse);
router.get("/users/:email", userActions.read);

router.post("/users", hashPassword, userActions.add);

router.put("/users/:id", hashPassword, userActions.edit);

router.delete("/users/:id", userActions.destroy);

module.exports = router;
