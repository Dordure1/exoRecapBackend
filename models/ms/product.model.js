const  {DataTypes} = require("sequelize")

function model(sequelize){
    const attributes= {
        idProduct : {type : DataTypes.INTEGER, allowNull:false, primaryKey: true,autoIncrement: true},
        name : {type : DataTypes.STRING, allowNull:false}, 
        description : {type : DataTypes.STRING, allowNull:false}, 
        picture : {type : DataTypes.STRING, allowNull:false}, 
        isAvailable : {type : DataTypes.BOOLEAN, allowNull:false}, 
        price : {type: DataTypes.FLOAT, allowNull:false}
    }
    const options = 
    {
        timestamps: false,
        tableName:"Product"
    }
    return sequelize.define("Product", attributes, options)
}
module.exports = model