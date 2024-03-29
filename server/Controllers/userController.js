const User = require('../Model/User');
const Apartment = require('../Model/apartment');

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

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    } else if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: 'Invalid password',
      });
    }
    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        photoUrl: user.photoUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getApartment = async (req, res, next) => {
  try {
    const { populer } = req.query;
    if (populer === 'true') {
      const apartments = await Apartment.find().sort({ price: -1 }).limit(3);
      return res.status(200).json({ success: true, apartments });
    }
    const apartments = await Apartment.find();
    res.status(200).json({ success: true, apartments });
  } catch (error) {
    next(error);
  }
};

const getApartmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const apartment = await Apartment.findById(id);
    res.status(200).json({ success: true, apartment });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  getApartment,
  getApartmentById,
};
