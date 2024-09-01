const express = require('express');
const router = express.Router();

const userActions = require("../controllers/UserActions");
const testActions = require("../controllers/TestActions");


//  ******* PATH ******* \\


router.get('/', testActions.test);

router.get('/users', userActions.browse);
router.post('/users', userActions.add);

module.exports = router;