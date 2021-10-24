const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json())

let products = [{name: "iphone 12", price: "999"}, {name: "iphone 1", price: "1999"}, {name: "iphone 14", price: "2999"},] //array 

//--------------MIDDLEWARE----------

const validator=(req,res,next) =>{
  const{name,price} = req.body

    if (!name || !price) res.json({Error: "Validation Failed" })
    else next()
}

//--------------PUBLIC ROUTES-------

//send all products
app.get('/products', (req, res)=>{  //products route
  res.json({products}) 
})

//-----------PRIVATE ROUTES----------

app.post('/products/add', (req,res) =>{
const{name,price} = req.body
  products.push({
    name,
    price,
    })
res.send({products})  
})

app.listen(PORT,()=>{
  console.log(`server at ${PORT}`)
})