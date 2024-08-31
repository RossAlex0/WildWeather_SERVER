const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  mail: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  registration_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('User', userSchema);