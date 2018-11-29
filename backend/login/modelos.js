const mongoose = require('mongoose')

const loginSchema =  new mongoose.Schema({
  user: Number,
  rol: String,
  password: Number,

})

module.exports = {
login: mongoose.model('login', loginSchema)
}