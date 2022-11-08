require('dotenv-flow').config()

const {NODE_ENV, PORT, URL_MONGODB} = process.env
const router = require('./routers');
const pug = require('pug');

const express = require('express');
const app = express()


//// Conection à la db
//const Shop = require('./models/shop.model');
// const database = require('./database');

// database(URL_MONGODB)
//     .then((db)=>{
//         console.log('Mongo connection OK');
//     })
//     .catch((err)=>{
//         console.log('connection failed');
//         process.exit(1)
//     })


app.use(express.static('public'));


app.set('view engine', 'pug')
app.set('views', 'views')



app.use(router)


app.listen(PORT,()=> {
    console.log(`Server up on port: ${PORT}, in ${NODE_ENV} mode`);
})