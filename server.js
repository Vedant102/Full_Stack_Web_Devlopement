const express = require ('express')
const database = require ('./database/db')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')

console.log(categoryRoutes.stack)

app.use(express.json())
app.use('/', categoryRoutes)

app.get('/', (req,res) => {
    try {
        console.log(document)
    } catch (error) {
       res.status(203).send(error.message) 
    }
})

app.listen(3001, () => {
    console.log("listning to port 3001")
})