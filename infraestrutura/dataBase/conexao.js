const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'tonkpils',
    database: 'agenda-salao'
})


module.exports = conexao
