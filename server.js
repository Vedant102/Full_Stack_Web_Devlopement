// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response) => {
//     // request.url
//     const { url } = request
//     if (url == '/login') {
//         response.write('<h1>LOGIN</h1>')
//         response.end()
//     }
//     if (url == '/signup') {
//         response.write('<h1>SINGUP</h1>')
//         response.end()
//     }
// })

// server.listen(3000, () => {
//     console.log(`Server listening at PORT: ${3000}`)
// })

const { response } = require('express')
const express = require ('express')
const app = express()

app.get('/login',(req,res) =>{
  res.send('login')
})
app.get('/signup',(req,res) =>{

  res.send('sign up')
})

app.listen(3000,() =>{
  console.log("server listning at port 3000")
})