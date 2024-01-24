const router = require('express').Router();
const userRoutes = require('./user');
const jwtRoutes = require('./jwt');

router.use('/api/v1/user', userRoutes);
router.use('/api/v1/jwt', jwtRoutes);

module.exports = router;
