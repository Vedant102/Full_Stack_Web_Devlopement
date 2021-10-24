const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())

let products = [{name: "iphone 12", price: "999"}, {name: "iphone 1", price: "1999"}, {name: "iphone 14", price: "2999"},] //array 


// GET Route 
//send all products
app.get('/products', (req, res)=>{  //products route
  res.json({products})
})

app.listen(PORT,()=>{
  console.log(`server at ${PORT}`)
})