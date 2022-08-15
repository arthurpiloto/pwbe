/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR NÚMEROS ÍMPARES E PARES
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 08/08/2022
VERSÃO: 1.0
******************************************************************/

const { exit } = require("process")

const parImpar = function (valor1, valor2, escolha)
{
    let numeroInicial = valor1
    let numeroFinal = valor2
    let opcao = escolha
    let numerosImpares = []
    let numerosPares = []

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

    for (let numero = numeroInicial; numero <= numeroFinal; numero++)
    {
        if (numero % 2 == 0)
        {
            numerosPares.push(numero)
        }
        else
        {
            numerosImpares.push(numero)
        }
    }

    if (opcao == `pares`)
    {
        console.log(`LISTA DE NÚMEROS PARES`)
        for (let contador = 0; contador < numerosPares.length; contador++)
        {
            console.log(`${numerosPares[contador]}`)
        }
        console.log(`QTD. DE NÚMEROS ENCONTRADOS: ${numerosPares.length}`)
        exit()
    }
    else if (opcao == `ímpares`)
    {
        console.log(`\nLISTA DE NÚMEROS ÍMPARES`)
        for (let contador = 0; contador < numerosImpares.length; contador++)
        {
            console.log(`${numerosImpares[contador]}`)
        }
        console.log(`QTD. DE NÚMEROS ENCONTRADOS: ${numerosImpares.length}`)
        exit()
    }
    else if (opcao == `ambos`)
    {
        console.log(`LISTA DE NÚMEROS PARES`)
        for (let contador = 0; contador < numerosPares.length; contador++)
        {
            console.log(`${numerosPares[contador]}`)
        }
        console.log(`QTD. DE NÚMEROS ENCONTRADOS: ${numerosPares.length}`)

        console.log(`\nLISTA DE NÚMEROS ÍMPARES`)
        for (let contador = 0; contador < numerosImpares.length; contador++)
        {
            console.log(`${numerosImpares[contador]}`)
        }
        console.log(`QTD. DE NÚMEROS ENCONTRADOS: ${numerosImpares.length}`)
        exit()
    }
    else
    {
        console.log(`ERRO: INSIRA A OPÇÃO DESEJADA`)
        exit()
    }
}

module.exports = {
    parImpar
}