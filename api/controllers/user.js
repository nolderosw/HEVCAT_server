const mongoose = require('mongoose');
const User = mongoose.model("User");

exports.post = (req,res,next) => { //criando uma request do tipo post
    var user = new User(req.body); //instanciando novo produto
    user
    .save()
    .then(x => {
        res.status(201).send({
            message:'User cadastrado com sucesso!'
        });
    }).catch(e => {
        res.status(400).send({
            message:'Falha ao cadastrar user',
            data: e
        });
    }); //salva o item no banco de dados
     //enviando uma resposta para a requisição, 201 pq é a resposta que foi criado
}