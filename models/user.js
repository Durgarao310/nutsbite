const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
  address: {
    type: String,
    default: '',
  },
  profilePicture: {
    type: String,
  },
  pushTokens: {
    type: Array,
    required: false,
  },
});

const Register = mongoose.model('user', registerSchema);
module.exports = Register;
