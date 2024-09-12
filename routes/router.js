const express = require("express");
const router = express.Router();

const userActions = require("../controllers/UserActions");
const testActions = require("../controllers/TestActions");
const { login } = require("../controllers/loginActions");
const auth = require("../midlleware/auth");

//  ******* PATH ******* \\

router.get("/", testActions.test);

router.post("/login", auth.comparePassword, login);

router.get("/users", userActions.browse);
router.get("/users/:email", userActions.read);

router.post("/users", auth.hashPassword, userActions.add);

module.exports = router;
