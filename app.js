const express = require('express')
const mongoose = require('mongoose')

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
    console.log(req.body)
    res.send('Orçamento - 01')
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080/')
})