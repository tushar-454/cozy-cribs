const router = require('express').Router();
const ownerController = require('../Controllers/ownerController');

router.post('/addApartment', ownerController.addApartment);

module.exports = router;
