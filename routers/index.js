const addproductRouter = require('./addproducts.router')
const homeRouter= require('./home.router')
const shopRouter = require('./shop.router')
const router = require("express").Router()


router.use('/addproducts',addproductRouter )
router.use('/shop',shopRouter )
router.use('/', homeRouter)

 
module.exports = router