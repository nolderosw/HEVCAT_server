const express = require('express'); //importando o express para criar uma rota
const router = express.Router(); //criando uma rota com o express
const controller = require('../controllers/user'); //importando controller do app

router.post('/', controller.post); //configurando uma rota com post!
module.exports = router; //exportando o modulo
