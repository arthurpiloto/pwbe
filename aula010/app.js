/************************************************************************
OBJETIVO: API RESPONSÁVEL PELA MANIPULAÇÃO DE DADOS DO BACK-END.
(GET, POST, PUT, DELETE)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 10/10/2022
VERSÃO: 1.0

ANOTAÇÕES:
Para manipular o acesso a BD podemos usar o Prisma. Para instalá-lo, devemos rodar os seguintes comandos:
NOVOS COMANDOS RODADOS
- npm install prisma --save
- npx prisma
- npx prisma init
- npm install @prisma/client
************************************************************************/

const express = require(`express`)
const cors = require(`cors`)
const bodyParser = require(`body-parser`)
const app = express()

app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`)
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
    app.use(cors())
    next()
})