
const Clientes = require('../models/clientesModel')

module.exports = app => {
    app.post('/clientes', (req, res) => {
        const clientes = req.body

        Clientes.adiciona(clientes, res)

    })
}
