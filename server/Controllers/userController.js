const User = require('../Model/User');

const createUser = async (req, res, next) => {
  try {
    const { name, email, phone, role, photoUrl, password } = req.body;
    const isExistsUser = await User.findOne({ email });
    // prevent duplicate user creation
    if (isExistsUser?.email === email) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }
    const newUser = await User.create({
      name,
      email,
      phone,
      role,
      photoUrl,
      password,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
