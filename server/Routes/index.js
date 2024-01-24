const router = require('express').Router();
const userRoutes = require('./user');
const jwtRoutes = require('./jwt');
const ownerRoutes = require('./owner');

router.use('/api/v1/user', userRoutes);
router.use('/api/v1/jwt', jwtRoutes);
router.use('/api/v1/owner', ownerRoutes);

module.exports = router;
