const database = require('../database/db')
const express = require ('express')
const { response } = require('express')
const router = express.Router()

router.get('/all',()=> {
  try {
    res.json({
      category:database.categories,
      message:"Sucessfully Fetched",
      status:"SUCCESS"
    })
    
  } catch (error) {
    res.json({
      category:[],
      message:error.message,
      status:"FAILED"
    })
  }
})