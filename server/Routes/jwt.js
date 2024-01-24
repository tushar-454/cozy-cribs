const router = require('express').Router();
const jwtController = require('../Controllers/jwtController');

router.post('/create', jwtController.createToken);
router.post('/remove', jwtController.removeToken);

module.exports = router;
