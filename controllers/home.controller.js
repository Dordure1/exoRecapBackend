const productService = require("../services/product.service")

const homeController = { 
    index :async (req,res) => {
        const data = await productService.getAll()
        // console.log(data[0].dataValues);
        const productDatas = []
        data.forEach(element => {
            productDatas.push(element.dataValues)
        });

        console.log(productDatas);
        res.render('home/index', {productDatas})
    }
}
module.exports = homeController