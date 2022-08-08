/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR MÉDIA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/

const calcularMedia = function (valor1, valor2, valor3, valor4)
{
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let erro = false
    let resultado

    if (nota1 < 1 || nota1 > 100 || nota2 < 1 || nota2 > 100 || nota3 < 1 || nota3 > 100 || nota4 < 1 || nota4 > 100)
    {
        console.log(`TODAS AS NOTAS DEVEM ESTAR ENTRE 1 E 100`)
        erro = true
        exit()
    }
    else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')
    {
        console.log(`TODAS AS NOTAS DEVEM SER INFORMADAS`)
        erro = true
        exit()
    }
    else
    {
        resultado = (nota1 + nota2 + nota3 + nota4) / 4

        if (erro)
        {
            return false
        }
        else
        {
            return resultado.toFixed(1)
        }
    }
}

module.exports = {
    calcularMedia
}