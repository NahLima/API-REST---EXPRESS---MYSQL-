const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 0000, // colcoar a sua porta aqui
    user: 'root',
    password: '*******', // colocar sua senha aqui 
    database: 'agenda-salao'
})


module.exports = conexao
