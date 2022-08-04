/******************************************************************
OBJETIVO: APLICAR ESTRUTURAS DE REPETIÇÃO (WHILE E FOR)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/
console.log('\nCALCULAR TABUADA SIMPLES')

const { tabuada, calcularTabuada } = require(`./modulos/tabuada.js`)
var readline = require('readline')
const { exit } = require('process')
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(`DIGITE A TABUADA A SER CALCULADA: `, function (numero) {
    let tabuada = numero
    calcularTabuada(tabuada)
    exit()
})