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

// Cria um objeto chamado "app" que será especialista nas funções do Express
const app = express()

// Request = receber dados
// Response = devolver dados
app.use((request, response, next) => {
    // Permite especificar quem serão os IP's que podem acessar a API (* = todos)
    response.header(`Access-Control-Allow-Origin`, `*`)
    // Permite especificar quais métodos irão ser usados pela API
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
})