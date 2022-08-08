/******************************************************************
OBJETIVO: EXERCÍCIO PARA TREINAR OS CONTEÚDOS VISTOS EM AULA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 08/08/2022
VERSÃO: 1.0
******************************************************************/
console.log(`\nEXERCÍCIO 02\n`)

const { calcularTabuada } = require(`./modulos/tabuada.js`)
var readline = require(`readline`)
const { exit } = require("process")
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(`DIGITE A PRIMEIRA TABUADA A SER CALCULADA: `, function (numero1)
{
    let tabuadaInicio = numero1

    entradaDados.question(`DIGITE A ÚLTIMA TABUADA A SER CALCULADA: `, function (numero2)
    {
        let tabuadaFinal = numero2
        
        entradaDados.question(`DIGITE O CONTADOR INICIAL: `, function (numero3)
        {
            let contadorInicio = numero3
            
            entradaDados.question(`DIGITE O CONTADOR FINAL: `, function (numero4)
            {
                let contadorFinal = numero4

                if (isNaN(tabuadaInicio) || isNaN(tabuadaFinal) || isNaN(contadorInicio) || isNaN(contadorFinal))
                {
                    console.log(`TODAS OS CAMPOS PRECISAM SER NÚMEROS`)
                    exit()
                }
                else
                {
                    calcularTabuada(tabuadaInicio, tabuadaFinal, contadorInicio, contadorFinal)
                    exit()
                }
            })
        })
    })
})