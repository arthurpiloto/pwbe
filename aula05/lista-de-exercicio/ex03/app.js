/******************************************************************
OBJETIVO: EXERCÍCIO PARA TREINAR OS CONTEÚDOS VISTOS EM AULA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 08/08/2022
VERSÃO: 1.0
******************************************************************/
console.log(`EXERCÍCIO 03`)

const { parImpar } = require(`./modulos/parImpar.js`)
var readline = require(`readline`)
const { exit } = require("process")
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(`INSIRA O PRIMEIRO NÚMERO: `, function (valor1)
{
    let numeroInicial = parseFloat(valor1)
    
    if (isNaN(numeroInicial))
    {
        console.log(`ERRO: TODOS OS CAMPOS DEVEM SER NÚMEROS`)
        exit()
    }

    entradaDados.question(`INSIRA O SEGUNDO NÚMERO: `, function (valor2)
    {
        let numeroFinal = parseFloat(valor2)
        
        if (isNaN(numeroFinal))
        {
            console.log(`ERRO: TODOS OS CAMPOS DEVEM SER NÚMEROS`)
            exit()
        }

        parImpar(numeroInicial, numeroFinal)
    })
})