# API-Projeto-Orcamento-Node.js
Aplicação back-end com Node.js, para salvar solicitação de orçamento no banco de dados e enviar e-mail para o usuário informando status da solicitação.

Tecnologias:
 - Node.js
 - Express
 - Nodemon
 - mongoose
 - MongoDB
 - Nodemailer
 - Mailtrap
 - Cors
 
#
COMO RODAR O PROJETO

Instalar todas as dependencias indicadas pelo package.json
### npm install

Rodar o projeto usando o nodemon 
### nodemon app.js

#
SEQUENCIA PARA CRIAR O PROJETO

Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon

Rodar o projeto usando o nodemon 
### nodemon app.js

Instalar o banco de dados MongoDB
### npm install --save mongodb

Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados pela aplicação.
### npm install --save mongoose

Módulo para enviar email
### npm install nodemailer

Permitir acesso a API
### npm install --save cors
