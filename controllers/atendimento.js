// responsabilidade do controller é controlar as nossa rotas 

module.exports = app => {
    app.get('/atendimentos', (req,res) => res.send('Estamos na rota de atendimento - GET'))

    app.post('/atendimentos', (req,res)=> {
        console.log(req.body)
        res.send('Estamos na rota de atendimento - POST')
})
}

