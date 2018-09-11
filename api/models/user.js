const mongoose = require('mongoose'); //importando o mongoose
const Schema = mongoose.Schema; //utilizando o mongoose para criar um schema, um BD nao relacional necessita de tratar aqui no codigo!

const schema = new Schema({
    nome: {
        type: String, //tipo da propriedade 
        required: true, //se a propriedade é obrigatoria
        trim: true //ele é trim, ou seja, remove os espaços antes e dps da string no nome!
    },
    email: {
        type: String, //tipo da propriedade 
        required: true, //se a propriedade é obrigatoria
        trim: true,
        unique: true //atributo unico 
    },
    pesquisa: {
        type: String, //tipo da propriedade 
        trim: true 
    },
    formacao: {
        type: String, //tipo da propriedade 
        trim: true 
    },
    senha: {
        type: String, //tipo da propriedade 
        required: true, //se a propriedade é obrigatoria
        trim: true 
    }
}); //instanciando novo esquema do produto

module.exports = mongoose.model("User", schema); //exportando um modelo, ver que agora preciso dar um nome e definir o tipo (schema)

