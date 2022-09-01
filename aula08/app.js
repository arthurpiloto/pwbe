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

