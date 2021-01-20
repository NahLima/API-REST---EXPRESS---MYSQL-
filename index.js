// reponsabilidade do index é subir o servidor 

const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/dataBase/conexao')
const Tabelas = require('./infraestrutura/dataBase/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})
