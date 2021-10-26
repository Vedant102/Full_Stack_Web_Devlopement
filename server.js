const express = require ('express')
const database = require ('./database/db')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')

app.use(express.json())

// Router is just an object which allows us to create routes
// http://localhost:3001/1234/CategoryRoutes

app.use('/', categoryRoutes) //Using the router

app.listen(3001, () => {
    console.log("listning to port 3001")
})