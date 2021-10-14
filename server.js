//Run this in thunder to get output `http://localhost:3000`

const express = require('express') 
const PORT=3000   
const app = express() // call express Js

app.get('/', (req,res) => { //get requwst
  console.log(req)
  if(req.headers['user-agent'] ==="Thunder Client (https://www.thunderclient.io)") //SMALL SECURITY CHECK THAT ALLOW ONYLY SPECIFIED REQUEST
    res.send('GET')
  else res.send('BLOCKED')
})

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
