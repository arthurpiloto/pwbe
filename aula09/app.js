/******************************************************************
OBJETIVO: EXERCÍCIO DE CRIAÇÃO DE UMA API
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 08/09/2022
******************************************************************/
const express = require(`express`)
const app = express()
const cors = require(`cors`)
const bodyParser = require(`body-parser`)
const { getBook } = require(`./modulo/livros.js`)

app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`)
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
    app.use(cors())
    next()
})

app.get(`/book/:bookName`, cors(), async (request, response, next) => {
    let bookName = request.params.bookName
    let book = getBook(bookName)

    if (book) {
        response.status(200)
        response.json(book)
    } else {
        response.status(404)
    }
})

app.listen(8080, () => {
    console.log(`Server waiting requisitions`)
})