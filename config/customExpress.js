// responsabilidade do custom é configurar qualquer coisa dentro do  express 

const express = require('express')
const consign = require ('consign')
const bodyParser = require('body-parser')


module.exports = () => {   // pegou o app --> configurou o app --> retornou o app 
    const app = express ()

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    consign() // ele pega todos os controllers altera aqui 
        .include('controllers')
        .into(app)
    return app 
}
