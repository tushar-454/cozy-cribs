const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.json({ message: 'Api health is fineee' });
});

module.exports = router;
