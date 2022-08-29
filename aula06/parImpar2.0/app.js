/******************************************************************
OBJETIVO: EXERCÍCIO PARA TREINAR ARRAY
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 08/08/2022
VERSÃO: 1.0
******************************************************************/
console.log(`EXERCÍCIO PAR/ÍMPAR`)

const { exit, getPares, getImpares, getParesImpares } = require("process")
var readline = require(`readline`)
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(`INSIRA O PRIMEIRO NÚMERO: `, function (numero1) {
    let numeroInicial = parseInt(numero1)
    if (isNaN(numeroInicial)) {
        console.log(`APENAS NÚMEROS SÃO ACEITOS`)
        exit()
    }

    entradaDados.question(`INSIRA O SEGUNDO NÚMERO: `, function (numero2) {
        let numeroFinal = parseInt(numero2)
    })
})