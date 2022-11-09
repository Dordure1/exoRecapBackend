const express = require('express')

const addproductController = require('../controllers/addproducts.controller')

const addproductRouter = express.Router()

addproductRouter.get("/", addproductController.index)
addproductRouter.post("/", addproductController.productPost)


module.exports = addproductRouter