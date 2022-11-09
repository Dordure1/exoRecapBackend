
const productService = require('../services/product.service')

const addproduct = {
    index: (req,res)=>{
        res.render("addProducts/index")
    },
    productPost :async (req,res)=>{

        data = req.body

        console.log(data);

        await productService.create(data)
        res.redirect("shop")
    }
}
module.exports = addproduct