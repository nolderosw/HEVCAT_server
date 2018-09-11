const express = require('express'); //importando o express
const bodyParser = require('body-parser'); //importando o body parser para transformar o corpo da requisicao para um json
const mongoose = require('mongoose'); //instanciando o mongoose para gerenciar o mongodb

const app = express(); //criando um app com express
const router = express.Router(); //criando o sistema de rotas, para o usuario acessar a app a partir de uma url

//conectando com o banco de dados
mongoose.connect('mongodb://localhost:27017/HEVCAT');


//carrega models

const User = require('../api/models/user');

//carrega as rotas
const indexRoute = require('../api/routes/index');
const userRoute = require('../api/routes/user');

app.use(bodyParser.json()); //todo conteudo do corpo da requisicao é convertido pra json
app.use(bodyParser.urlencoded({ extended: false })); //codificacao da url


app.use('/', indexRoute); //usando a rota route quando o usuario acessar '/'
app.use('/user', userRoute) //usando a rota route quando o usuario acessar '/user'

module.exports = app; //exportando modulo