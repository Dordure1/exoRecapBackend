const express = require('express')
const shopController = require('../controllers/shop.controllers')

const shopRouter = express.Router()


shopRouter.get("/", shopController.index)


module.exports = shopRouter