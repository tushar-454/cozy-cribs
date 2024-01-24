const router = require('express').Router();
const jwtController = require('../Controllers/jwtController');

router.post('/create', jwtController.createToken);

module.exports = router;
