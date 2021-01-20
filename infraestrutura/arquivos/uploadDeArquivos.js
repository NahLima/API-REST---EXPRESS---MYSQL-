const fs = require('fs')
const path = require('path') // faz leituras de caminhos

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho) // saber o nome depois do ponto "extensao"
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1 


    if (tipoEhValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    } else {
        const erro = 'Tipo é inválido'
        console.log('Erro! Tipo inválido')
        callbackImagemCriada(erro)
    }
}