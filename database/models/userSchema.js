const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 15
},
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
}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);