const homeRouter= require('./home.router')
const shopRouter = require('./shop.router')
const router = require("express").Router()


router.use('/shop',shopRouter )
router.use('/', homeRouter)

 
module.exports = router