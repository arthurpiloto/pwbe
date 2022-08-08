/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR A TABUADA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/

const { exit } = require("process")

const calcularTabuada = function (numeroInicio, numeroFinal, valorInicio, valorFinal)
{
    let tabuadaInicio = parseFloat(numeroInicio)
    let tabuadaFinal = parseFloat(numeroFinal)
    let contadorInicio = parseFloat(valorInicio)
    let contadorFinal = parseFloat(valorFinal)
    let resultado

    if (tabuadaInicio == '' || tabuadaFinal == '' || contadorInicio == '' || contadorFinal == '')
    {
        console.log(`TODOS OS CAMPOS DEVEM SER PREENCHIDOS`)
        exit()
    }
    else if (tabuadaInicio > tabuadaFinal)
    {
        console.log(`A TABUADA FINAL DEVE SER MAIOR QUE A INICIAL`)
        exit()
    }
    else if (contadorInicio > contadorFinal)
    {
        console.log(`O CONTADOR FINAL DEVE SER MAIOR QUE O INICIAL`)
        exit()
    }
    else if (tabuadaInicio < 1 || tabuadaFinal > 100)
    {
        console.log(`OS VALORES DE CÁLCULO DA TABUADA DEVEM ESTAR ENTRE 1 E 100`)
        exit()
    }
    else if (contadorInicio < 1 || contadorFinal > 50)
    {
        console.log(`OS VALORES DE CÁLCULO DO CONTADOR DEVEM ESTAR ENTRE 1 E 50`)
        exit()
    }
    else
    {
        while (tabuadaInicio <= tabuadaFinal)
        {
            console.log(`\nTabuada do [${tabuadaInicio}]`)
            while (contadorInicio <= contadorFinal)
            {
                resultado = tabuadaInicio * contadorInicio
                console.log(`${tabuadaInicio} x ${contadorInicio} = ${resultado}`)
            }
            tabuadaInicio += 1
            contadorInicio = parseFloat(valorInicio)
        }
    }
}

module.exports = {
    calcularTabuada
}