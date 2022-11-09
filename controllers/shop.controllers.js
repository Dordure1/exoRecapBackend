const productService = require('../services/product.service')


const shopController = {

    index :async  (req, res)=>{
        const data = await productService.getAll()
        // console.log(data[0].dataValues);
        const productDatas = []
        data.forEach(element => {
            productDatas.push(element.dataValues)
        });

        console.log(productDatas);
        res.render('shop/index',{productDatas})
    },
    details:(req,res)=>{
        res.render("details/details")
    }
}

module.exports = shopController