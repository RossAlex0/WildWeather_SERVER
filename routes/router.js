const express = require('express');
const router = express.Router();

const userActions = require("../controllers/UserActions");
const testActions = require("../controllers/TestActions");


//  ******* PATH ******* \\


router.get('/', testActions.test);

router.get('/users', userActions.readAll);


module.exports = router;