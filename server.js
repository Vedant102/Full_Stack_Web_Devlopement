const express = require('express')
const PORT =3000
const app = express()

const logger = (req, res, next) => {
  console.log(req.method)
  next()
}

app.use(logger) //universal - this middlewear will be used on every request

app.get('/', (req, res) => {
  res.send('server running') 
})

app.post('/', (req, res) => {
  res.send('server running') 
})

app.listen(PORT,()=>{
  console.log(`server at ${PORT}`)
})