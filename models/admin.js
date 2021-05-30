const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pushTokens: {
    type: Array,
    required: false,
  },
})


const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin