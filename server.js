const express = require('express')
const app = express()
const category_Routes = require('./routes/categoryRoutes')
const product_Routes = require('./routes/productRoutes')
app.use(express.json())


app.use('/category', category_Routes)
app.use('/products', product_Routes)

app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})