/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR NÚMEROS ÍMPARES E PARES
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 08/08/2022
VERSÃO: 1.0
******************************************************************/

const { exit } = require("process")

const parImpar = function (valor1, valor2)
{
    let numeroInicial = valor1
    let numeroFinal = valor2
    let resultado

    resultado = numeroInicial % 2

    if (numeroInicial == "" || numeroFinal == "")
    {
        console.log(`ERRO: TODOS OS NÚMEROS DEVEM SER DIGITADOS`)
        exit()
    }
    else if (numeroInicial > numeroFinal)
    {
        console.log(`ERRO: O PRIMEIRO NÚMERO DEVE SER MENOR QUE O SEGUNDO`)
        exit()
    }
    else if (numeroInicial == numeroFinal)
    {
        console.log(`ERRO: OS NÚMEROS NÃO PODEM SER IGUAIS`)
        exit()
    }
    else if (numeroInicial < 0 || numeroInicial > 500 || numeroFinal > 1000)
    {
        console.log(`ERRO: INSIRA APENAS NÚMEROS ENTRE 0 E 1000`)
        exit()
    }

    

    return resultado
}

module.exports = {
    parImpar
}