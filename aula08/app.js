/******************************************************************
OBJETIVO: AULA SOBRE CRIAÇÃO E CONSUMO DE APIs
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 01/09/2022
******************************************************************/
/*
BIBLIOTECAS NECESSÁRIAS PARA CRIAR UMA API
1º - Express -> npm install express --save; É uma biblioteca para criar aplicações em node no formato de API
2º - Cors -> npm install cors --save; É uma biblioteca para manipular as permissões do protocolo http
3º - Body-Parser -> npm install body-parser --save; É uma biblioteca que permite manipular o corpo do protocolo http
*/

// Import da biblioteca do Express para criar a API
const express = require(`express`)
// Import da biblioteca do Cors para manipular as permissões do protocolo http
const cors = require(`cors`)
// Import da biblioteca do Body-Parser para manipular o corpo das requisições do protocolo http
const bodyParser = require(`body-parser`)
// Import do arquivo de estados
const { getListEstados, getEstado } = require(`./modulo/estados.js`)
// Import do arquivo de cidades
const { getCities } = require(`./modulo/cidades.js`)

// Cria um objeto chamado "app" que será especialista nas funções do Express
const app = express()

// Request = receber dados
// Response = devolver dados
app.use((request, response, next) => {
    // Permite especificar quem serão os IP's que podem acessar a API (* = todos)
    response.header(`Access-Control-Allow-Origin`, `*`)
    // Permite especificar quais métodos irão ser usados pela API
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)

    // Estabelece que as permissões acima serão representadas pelo cors
    app.use(cors())

    /* Assegura que os códigos vão ter uma continuidade após o fim do bloco, ou seja, quando as linhas 
    de códigos escritas dentro de um bloco forem terminadas ele irá ir/pular/executar as próximas linhas 
    sem morrer naquele bloco onde está */
    next()
})

// EndPoint: Listagem de Estados
app.get(`/estados`, cors(), async (request, response, next) => {
    let estados = getListEstados()
    let estadosJSON = {}
    if (estados) {
        // Cria uma chave chamada "sigla" para receber os dados de estados (Array)
        estadosJSON.sigla = estados
        response.status(200)
        response.json(estadosJSON)
    } else {
        response.status(404)
    }
})

// EndPoint: Busca informações de um Estado pela sigla
app.get(`/estado/:sigla`, cors(), async (request, response, next) => {
    // Recebe a sigla enviada por parâmetro no EndPoint
    let sigla = request.params.sigla
    // Chama a função que vai localizar o Estado solicitado
    let estado = getEstado(sigla)
    if (estado) {
        response.status(200)
        response.json(estado)
    } else {
        response.status(404)
    }
})

// Listagem de Cidades
app.get(`/cidades/:sigla`, cors(), async (request, response, next) => {
    let sigla = request.params.sigla
    cidades = getCities(sigla)
    let cidadesJSON = {}

    if (cidades) {
        cidadesJSON.cidades = cidades
        response.status(200)
        response.json(cidadesJSON)
    } else {
        response.status(404)
    }
})

/* Para que os EndPoints possam estar funcionando, precisamos obrigatoriamente finalizar
a API com essa function, que representa o start da API */
app.listen(8080, () => {
    console.log(`Server waiting requisitions`)
})