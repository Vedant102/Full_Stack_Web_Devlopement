const express = require('express')
const PORT=3000   
const app = express() // express Js

app.get('/', (req,res) => {
  res.send('GET')
})

app.post('/', (req,res) =>{
  res.send('POST')
})

app.put('/', (req,res) =>{
  res.send('PUT')
})

app.patch('/', (req,res) =>{
  res.send('PATCH')
})

app.delete('/', (req,res) =>{
  res.send('DELETE')
})

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})

module.exports = () =>{}