const productService = require("../services/product.service")

const homeController = { 
    index :async (req,res) => {

        await productService.getAll().then(products => res.json(products))
        
        res.render('home/index')
    }
}

module.exports = homeController