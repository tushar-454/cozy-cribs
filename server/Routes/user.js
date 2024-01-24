const router = require('express').Router();
const userController = require('../Controllers/userController.js');

router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/getApartment', userController.getApartment);

module.exports = router;
