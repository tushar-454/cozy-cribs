const { model } = require('mongoose');
const Apartment = require('../Model/apartment');

const addApartment = async (req, res, next) => {
  try {
    const {
      image,
      city,
      name,
      description,
      location,
      price,
      roomDetails,
      availabilityDate,
      ownerInfo,
    } = req.body;
    const newApartment = await Apartment({
      image,
      city,
      name,
      description,
      location,
      price,
      roomDetails,
      availabilityDate,
      ownerInfo,
    });
    await newApartment.save();
    res
      .status(200)
      .json({ success: true, message: 'Apartment added successfully' });
  } catch (error) {
    next(error);
  }
};

const getApartment = async (req, res, next) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json({ success: true, apartments });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addApartment,
  getApartment,
};
