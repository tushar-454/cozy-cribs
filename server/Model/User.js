const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model('User', userSchema, 'users');
module.exports = User;
