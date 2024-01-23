const router = require('express').Router();
const userController = require('../Controllers/userController.js');

router.post('/create', userController.createUser);

module.exports = router;
