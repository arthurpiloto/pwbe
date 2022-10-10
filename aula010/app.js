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

// PERMITE RECEBER UM JSON NAS REQUISIÇÕES
const jsonParser = bodyParser.json()

/***************************************
ROTAS PARA CRUD DE ALUNOS 
DATA: 10/10/2022
***************************************/
// ENDPOINT PARA LISTAR TODOS OS ALUNOS
app.get(`/alunos`, cors(), async (request, response, next) => {
    // IMPORT DO ARQUIVO controller-aluno.js
    const controllerAluno = require(`./controller/controller-aluno.js`)

    // RETORNA TODOS OS ALUNOS EXISTENTES NO BD
    const dadosAlunos = await controllerAluno.listarAlunos()

    let statusCode = 404
    let message
    if (dadosAlunos) {
        statusCode = 200
        message = dadosAlunos
    }
    return response.status(statusCode).json(message)
})

// ENDPOINT PARA INSERIR UM NOVO ALUNO
app.post(`/aluno`, cors(), jsonParser, async (request, response, next) => {
    let statusCode
    let message
    let headerContentType

    // FORNECE O FORMATO  DE DADOS DA REQUISIÇÃO
    headerContentType = request.headers[`content-type`]
    if (headerContentType == `application/json`) {
        // RECEBE OS DADOS QUE O BODY (USUÁRIO) MANDA
        let dadosBody = request.body
        console.log(dadosBody)
        statusCode = 200
        message = `Success`
    } else {
        statusCode = 415
    }

    response.status(statusCode).json(message)
})

// ATIVA O SERVIDOR PARA RECEBER REQUISIÇÕES HTTP
app.listen(8080, () => {
    console.log(`Server Waiting Requisitions`)
})