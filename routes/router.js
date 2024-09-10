const express = require("express");
const router = express.Router();

const userActions = require("../controllers/UserActions");
const testActions = require("../controllers/TestActions");
const { login } = require("../controllers/loginActions");
const { comparePassword } = require("../midlleware/compare");

//  ******* PATH ******* \\

router.get("/", testActions.test);

router.post("/login", comparePassword, login);

router.get("/users", userActions.browse);
router.get("/users/:email", userActions.read);
router.post("/users", userActions.add);

module.exports = router;
