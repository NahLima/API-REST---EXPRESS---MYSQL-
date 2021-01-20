const conexao = require('../infraestrutura/dataBase/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')


class Clientes {
    adiciona(cliente, res) {
        const query = 'INSERT INTO Clientes SET ?'

        uploadDeArquivo(cliente.imagem, cliente.nome, (erro, novoCaminho) => {
            if (erro) {
                res.status(400).json({ erro })
            } else {
                const novoCliente = { nome: cliente.nome, imagem: novoCaminho }

                conexao.query(query, novoCliente, erro => {
                    if (erro) {
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoCliente)
                    }
                })
            }
        })
    }
}

module.exports = new Clientes()
