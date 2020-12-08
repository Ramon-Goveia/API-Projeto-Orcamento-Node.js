const express = require('express')
const mongoose = require('mongoose')

require('./models/Orcamento')
const Orcamento = mongoose.model('Orcamento')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost/myapp', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!")
}).catch((err) => {
    console.log("ERRO: Erro na conexão com MongoDB!" + err)
});

app.post('/orcamento', async (req, res) => {
    await Orcamento.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "ERRO: Solicitação de orçamento não enviada!"
        })
    })
    return res.json({
        error: false,
        message: "Solicitação de orçamento enviada com sucesso!"
    })
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080/')
})