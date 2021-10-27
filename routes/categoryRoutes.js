const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

/*
    ALL
ROUTE : http://localhost:3001/category/all
METHOD : get
*/

router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

/*
    ADD REQUEST
ROUTE : http://localhost:3001/category/add
METHOD : post
*/
router.post('/add', (req, res) => {
  const { name } = req.body
  const newCategory = {
      id: uuidv4(),
      name
  }
  try {
      let includes = database.categories.find(item => item.name === name)
      if (!includes) database.categories.push(newCategory)

      else console.log('Already exists')
      res.json({
          categories: database.categories,
          message: "Successfully added category",
          status: "SUCCESS"
      })
  } catch (error) {
      console.log(error)
      res.json({
          categories: [],
          message: error.message,
          status: "FAILED"
      })
  }

})

/*
    DELETE REQUEST
ROUTE : http://localhost:3001/category/add
METHOD : post
*/

router.delete('/delete',(req, res) =>{
    try {
        const {id} = req.body //we can use "params" here to give parameter and delete element
        //   let element = database.category.find(item=>item.id === id)
        //   const index = database.categories.indexOf(element)
        //   database.categories.splice(index,1)  
        const newCategories = database.categories.filter(item=>item.id!==id)
        database.categories = newCategories

        res.status(200).json({
            categories: newCategories,
            message: "Successfully deleted category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})


module.exports = router