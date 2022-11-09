const productService = require("../services/product.service")

const homeController = { 
    index :async (req,res) => {
        
        res.render('home/index')
    }
}
module.exports = homeController