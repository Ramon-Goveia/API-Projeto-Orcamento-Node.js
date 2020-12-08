const express = require('express')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

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
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "cffe5c8201e7fb",
            pass: "11dc8345284943"
        },
    })

    var emailHtml = 'Prezado(a)<br><br> Recebemos a sua solicitação.<br><br>Em breve será encaminhado o orçamento.<br><br>';

    var eamilTexto = 'Prezado(a)\n\nRecebemos a sua solicitação.\n\nEm breve será encaminhado o orçamento.\n\n';

    emailSendInfo = {
        from: '391b1a8705-813402@inbox.mailtrap.io',
        to: req.body.email,
        subject: "Recebemos a solicitação de orçamento",
        text: eamilTexto,
        html: emailHtml,
    }

    await transport.sendMail(emailSendInfo, function(err){
        if(err) return res.status(400).json({
            error: true,
            message: "ERRO: Solicitação de orçamento não enviada!"
        })
        
        return res.json({
            error: false,
            message: "Solicitação de orçamento enviada com sucesso!"
        })
    })
   
})

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080/')
})