const mongoose = require('mongoose')
//blueprint for db

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type:String,
    unique: true, //for no duplicate email
    required: true // make it required
  },
  password: String
})

module.exports.User = mongoose.model("User", UserSchema)