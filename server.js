require('dotenv-flow').config()

const {NODE_ENV, PORT} = process.env
const router = require('./routers');
const pug = require('pug');

const express = require('express');


const app = express()

app.use(express.static('public'));

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(router)


app.listen(PORT,()=> {
    console.log(`Server up on port: ${PORT}, in ${NODE_ENV} mode`);
})