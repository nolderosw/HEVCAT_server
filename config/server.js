/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* iniciar o objeto do express */
var app = express();

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* configurar o middleware express-validator */
app.use(expressValidator());

//carrega as rotas
const indexRoute = require('../api/routes/index');

app.use('/', indexRoute); //usando a rota route quando o usuario acessar '/'

/* exportar o objeto app */
module.exports = app;