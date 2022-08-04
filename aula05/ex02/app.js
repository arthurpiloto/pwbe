/******************************************************************
OBJETIVO: APLICAR ESTRUTURAS DE REPETIÇÃO (WHILE E FOR)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/
console.log('\nCALCULAR TABUADA SIMPLES')

// Import da função calcularTabuada
// Import e criação da instância de interação com usuário
const { tabuada, calcularTabuada } = require(`./modulos/tabuada.js`)
var readline = require('readline')
const { exit } = require('process')
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

// Entrada da tabuada escolhida pelo usuário
entradaDados.question(`DIGITE A TABUADA A SER CALCULADA: `, function (numero) {
    let tabuada = numero
    calcularTabuada(tabuada)
    exit()
})