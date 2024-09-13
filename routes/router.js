const express = require("express");
const router = express.Router();

const userActions = require("../controllers/UserActions");

const { login } = require("../controllers/loginActions");

const auth = require("../midlleware/auth");

//  ******* PATH ******* \\

router.post("/login", auth.comparePassword, login);

router.get("/users", userActions.browse);
router.get("/users/:email", userActions.read);

router.post("/users", auth.hashPassword, userActions.add);

router.put("/users/:id", auth.hashPassword, userActions.edit);

router.delete("/users/:id", userActions.destroy);

module.exports = router;
