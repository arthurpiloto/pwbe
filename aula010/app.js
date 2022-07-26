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

const { novoAluno, atualizarAluno, excluirAluno, listarAlunos, listarAlunoPorId } = require(`./controller/controller-aluno.js`)
const { novoCurso, atualizarCurso, excluirCurso, listarCursos, listarCursoPorId } = require(`./controller/controller-curso.js`)
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require(`./modules/config.js`)

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
app.get(`/v1/alunos`, cors(), async (request, response) => {
    // RETORNA TODOS OS ALUNOS EXISTENTES NO BD
    const dadosAlunos = await listarAlunos()

    let statusCode = 404
    let message = MESSAGE_ERROR.NOT_FOUND_DB
    if (dadosAlunos) {
        statusCode = 200
        message = dadosAlunos
    }
    return response.status(statusCode).json(message)
})

// ENDPOINT PARA INSERIR UM NOVO ALUNO
app.post(`/v1/aluno`, cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    // RECEBE O TIPO DE CONTENT TYPE QUE FOI ENVIADO NO HEADER DA REQUISIÇÃO
    headerContentType = request.headers[`content-type`]

    // VALIDAR SE O CONTENT TYPE É DO TIPO application/json, QUE É O FORMATO QUE ESTAMOS TRABALHANDO NA API
    if (headerContentType == `application/json`) {
        // RECEBE OS DADOS QUE O BODY (USUÁRIO) MANDA
        let dadosBody = request.body

        // VERIFICA SE O BODY ESTÁ VAZIO
        if (JSON.stringify(dadosBody) != `{}`) {
            // CHAMA A FUNÇÃO novoAluno DA CONTROLLER E ENCAMINHA OS DADOS DO BODY
            const dadosAluno = await novoAluno(dadosBody)
            statusCode = dadosAluno.status
            message = dadosAluno.message
        } else {
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }   
    } else {
        statusCode = 415
        message = MESSAGE_ERROR.CONTENT_TYPE
    }

    return response.status(statusCode).json(message)
})

// ENDPOINT PARA ATUALIZAR UM REGISTRO DE ALUNO
app.put(`/v1/aluno/:id`, cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers[`content-type`]
    if (headerContentType == `application/json`) {
        let dadosBody = request.body

        if (JSON.stringify(dadosBody) != `{}`) {
            let id = request.params.id

            if (id != `` && id != undefined) {
                dadosBody.id = id
                const dadosAluno = await atualizarAluno(dadosBody)
                statusCode = dadosAluno.status
                message = dadosAluno.message
            } else {
                statusCode = 400
                message = MESSAGE_ERROR.REQUIRED_ID
            }
        } else {
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.CONTENT_TYPE
    }

    return response.status(statusCode).json(message)
})

// ENDPOINT PARA EXCLUIR UM ALUNO EXISTENTE
app.delete(`/v1/aluno/:id`, cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let id = request.params.id

    if (id != `` && id != undefined) {
        const dadosAluno = await excluirAluno(id)

        statusCode = dadosAluno.status
        message = dadosAluno.message
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.REQUIRED_ID
    }

    return response.status(statusCode).json(message)
})

// ENDPOINT PARA BUSCAR UM ALUNO PELO ID
app.get(`/v1/aluno/:id`, cors(), async (request, response) => {
    let statusCode
    let message
    let id = request.params.id

    if (id != `` && id != undefined){
        const dadosAlunos = await listarAlunoPorId(id)

        if (dadosAlunos) {
            statusCode = 200
            message = dadosAlunos
        } else {
            statusCode = 404
            message = MESSAGE_ERROR.NOT_FOUND_DB
        }
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.REQUIRED_ID
    }
    
    return response.status(statusCode).json(message)
})

/***************************************
ROTAS PARA CRUD DE CURSO
DATA: 31/10/2022
***************************************/
// ENDPOINT PARA LISTAR TODOS OS CURSOS
app.get(`/v1/cursos`, cors(), async (request, response) => {
    let statusCode
    let message
    const dadosCursos = await listarCursos()

    if (dadosCursos) {
        statusCode = 200
        message = dadosCursos
    } else {
        statusCode = 404
        message = MESSAGE_ERROR.NOT_FOUND_DB
    }
    return response.status(statusCode).json(message)
})

// ENDPOINT PARA INSERIR UM NOVO CURSO
app.post(`/v1/curso`, cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers[`content-type`]

    if (headerContentType == `application/json`) {
        let dadosBody = request.body

        if (JSON.stringify(dadosBody) != `{}`) {
            const dadosCurso = await novoCurso(dadosBody)
            statusCode = dadosCurso.status
            message = dadosCurso.message
        } else {
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }
    } else {
        statusCode = 415
        message = MESSAGE_ERROR.CONTENT_TYPE
    }
    return response.status(statusCode).json(message)
})

// ENDPOINT PARA ATUALIZAR UM REGISTRO DE CURSO
app.put(`/v1/curso/:id`, cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let headerContentType

    headerContentType = request.headers[`content-type`]
    if (headerContentType == `application/json`) {
        let dadosBody = request.body

        if (JSON.stringify(dadosBody) != `{}`) {
            let id = request.params.id

            if (id != `` && id != undefined) {
                dadosBody.id = id
                const dadosCurso = await atualizarCurso(dadosBody)
                statusCode = dadosCurso.status
                message = dadosCurso.message
            } else {
                statusCode = 400
                message = MESSAGE_ERROR.REQUIRED_ID
            }
        } else {
            statusCode = 400
            message = MESSAGE_ERROR.EMPTY_BODY
        }
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.CONTENT_TYPE
    }
    return response.status(statusCode).json(message)
})

// ENDPOINT PARA EXCLUIR UM CURSO EXISTENTE
app.delete(`/v1/curso/:id`, cors(), jsonParser, async (request, response) => {
    let statusCode
    let message
    let id = request.params.id

    if (id != `` && id != undefined) {
        const dadosCurso = await excluirCurso(id)

        statusCode = dadosCurso.status
        message = dadosCurso.message
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.REQUIRED_ID
    }
    return response.status(statusCode).json(message)
})

// ENDPOINT PARA BUSCAR UM CURSO PELO ID
app.get(`/v1/curso/:id`, cors(), async (request, response) => {
    let statusCode
    let message
    let id = request.params.id

    if (id != `` && id != undefined){
        const dadosCurso = await listarCursoPorId(id)

        if (dadosCurso) {
            statusCode = 200
            message = dadosCurso
        } else {
            statusCode = 404
            message = MESSAGE_ERROR.NOT_FOUND_DB
        }
    } else {
        statusCode = 400
        message = MESSAGE_ERROR.REQUIRED_ID
    }
    return response.status(statusCode).json(message)
})

// ATIVA O SERVIDOR PARA RECEBER REQUISIÇÕES HTTP
app.listen(8080, () => {
    console.log(`Server Waiting Requisitions`)
})