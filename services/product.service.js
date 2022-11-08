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

}

async function update(id, data){

}


module.exports = {
    getAll, 
    getById, 
    create,
    update 
}