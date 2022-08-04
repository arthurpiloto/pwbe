/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR UMA TABUADA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/

const calcularTabuada = function (numero1) {
    let tabuada = numero1
    let resultado

    /* WHILE */
    let cont = 0
    while (cont <= 10) {
        resultado = tabuada * cont
        console.log(`${tabuada} x ${cont} = ${resultado}`)
        cont += 1
        // cont = cont + 1
        // cont ++
    }

    /* FOR */
}