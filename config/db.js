const tedious = require('tedious')
const {Sequelize} = require('sequelize')

const {dbName, dbConfig} = require('../config.json')
const { model } = require('mongoose')

module.exports=db={}

initialize(); 

async function initialize(){
    const dialect="mssql"
    const host= dbConfig.server
    const {userName,password} = dbConfig.authentification.options

    /// connection
    const sequelize = new Sequelize (dbName, userName, password,{host,dialect});

    /// init des models
    db.Product = require('../models/ms/product.model')(sequelize)

    /// pas utile en prod --> A désactiver
    // await sequelize.sync({alter:true})
    
}