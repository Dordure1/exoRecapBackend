const db = require('../config/db')


async function getAll(){
    return await db.Product.findAll()
}

async function getById(id){
    const product = await db.Product.findByPK(id)
    if(!product) throw "Produit non trouvé"
    return product
}

async function create(data){

    await db.Product.create({
        name : data.name, 
        description : data.desc,
        picture : data.picture,
        isAvailable : data.isAvai,
        price : data.price
    })
}

async function update(id, data){

}


module.exports = {
    getAll, 
    getById, 
    create,
    update 
}