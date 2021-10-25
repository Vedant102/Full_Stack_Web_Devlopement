const express = require('express')
const app = express()


app.get('/products/:categories', (req,res)=>{
    if(req.params.categories=='iphone'){
        res.send('IPHONE')
    }
    if(req.params.categories=='realme'){
        res.send('REALME')
    }
    if(req.params.categories=='vivo'){
        res.send('VIVO')
    }
    if(req.params.categories=='redmi'){
        res.send('REDMI')
    }
    console.log(req.params)
    res.send('PING')
})


app.listen(3001, () =>{
    console.log("listning to port 3001")
})