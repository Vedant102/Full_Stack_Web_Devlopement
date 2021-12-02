const express = require('express')
const connectDB = require('./Db/connectDB')
const {User} = require ('./Db/models/user')

connectDB()

const app = express()

app.use(express.json())

app.get('/getUser/:email', async(req, res) => { //get user by mail id
  try{
    const {email} = req.params
    const user = await User.findOne({email})
    res.send(user)
  }
  catch(error){
    console.log(error)
    res.send(error.message)
  }
})

app.post('/addUser', async(req, res) =>{ // add user to db
  try{
    console.log(req.body)
    const user = new User(req.body)
    await user.save()

    res.send('Request Recived')
  }
  catch(error){
    console.log(error)
    res.send('error.message')
  }
})

app.listen(3003, (req, res) => {
    console.log('Server listening at PORT 3003')
})
