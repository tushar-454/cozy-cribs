const jwt = require('jsonwebtoken');

const createToken = async (req, res, next) => {
  const { email, role } = req.body;
  try {
    const payload = { email, role };
    const token = await jwt.sign(payload, process.env.TOKEN_SECRET, {
      expiresIn: '1h',
    });
    res.send({ success: true, token: token });
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken };
