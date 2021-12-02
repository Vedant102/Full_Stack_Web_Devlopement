const mongoose = require('mongoose')

const connection_string = 'mongodb+srv://vedant:vedant@webdev.ur1m7.mongodb.net/test'

const connectDB = async ()=>{
  try{
    await mongoose.connect(connection_string)
    console.log("Connected to Database")
  }
  catch (error){
    console.log(error)
  } 
}
module.exports = connectDB