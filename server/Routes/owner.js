const router = require('express').Router();
const ownerController = require('../Controllers/ownerController');

router.post('/addApartment', ownerController.addApartment);
router.get('/getApartment', ownerController.getApartment);

module.exports = router;
