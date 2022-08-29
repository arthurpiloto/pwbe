/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR NÚMEROS ÍMPARES E PARES
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 29/08/2022
VERSÃO: 1.0
******************************************************************/

// Função que retorna pares
const getPares = function(numero1, numero2) {
    let numeroInicial = parseInt(numero1)
    let numeroFinal = parseInt(numero2)
    let pares = []
    let erro = true

    while (numeroInicial <= numeroFinal) {
        if (numeroInicial % 2 == 0) {
            pares.push(numeroInicial)
            erro = false
        }
        numeroInicial++
    }

    if (erro) {
        return false
    } else {
        return pares
    }
}

// Função que retorna ímpares
const getImpares = function(numero1, numero2) {
    let numeroInicial = parseInt(numero1)
    let numeroFinal = parseInt(numero2)
    let impares = []
    let erro = true

    while (numeroInicial <= numeroFinal) {
        if (numeroInicial % 2 != 0) {
            impares.push(numeroInicial)
            erro = false
        }
        numeroInicial++
    }

    if (erro) {
        return false
    } else {
        return impares
    }
}

// Função que retorna pares e ímpares
const getParesImpares = function(numero1, numero2) {
    let numeroInicial = parseInt(numero1)
    let numeroFinal = parseInt(numero2)
    let pares = []
    let impares = []
    let paresImpares = []

    // CHama as funções que separam os pares e ímpares
    pares = getPares(numeroInicial, numeroFinal)
    impares = getImpares(numeroInicial, numeroFinal)

    paresImpares = [pares, impares]
    return paresImpares
}

console.log(getParesImpares(1,10))

module.exports = {
    getPares,
    getImpares,
    getParesImpares
}