const express = require('express');
const router = express.Router();

const user = require("../controllers/UserActions");
const test = require("../controllers/TestActions")


router.get('/', test.test);

router.get('/users', user.test);

module.exports = router;