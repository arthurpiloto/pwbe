/******************************************************************
OBJETIVO: EXERCÍCIO DE INTEGRAÇÃO DE BANCO DE DADOS COM BACK-END
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 03/10/2022
******************************************************************/
const express = require(`express`)
const app = express()
const cors = require(`cors`)
const bodyParser = require(`body-parser`)

/* 
Para manipular o acesso a BD podemos usar o Prisma. Para instalá-lo, devemos rodar os seguintes comandos:
NOVOS COMANDOS RODADOS
npm install prisma --save
npx prisma
npx prisma init
npm install @prisma/client
*/