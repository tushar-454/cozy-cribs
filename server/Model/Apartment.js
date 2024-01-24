const { model, Schema } = require('mongoose');

const apartmentSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  roomDetails: {
    type: {
      bedrooms: Number,
      bathrooms: Number,
      size: Number,
    },
    required: true,
  },
  availabilityDate: {
    type: String,
    required: true,
  },
  ownerInfo: {
    type: {
      image: String,
      name: String,
      phone: String,
    },
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
});

const Apartment = model('Apartment', apartmentSchema, 'apartments');

module.exports = Apartment;
