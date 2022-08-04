/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR UMA TABUADA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/

const calcularTabuada = function (numero1) {
    let tabuada = numero1
    let resultado

    let cont = 0
    /* WHILE */
    console.log(`\n************* TESTANDO WHILE *************`)
    while (cont <= 10) {
        resultado = tabuada * cont
        console.log(`${tabuada} x ${cont} = ${resultado}`)
        cont += 1
        // cont = cont + 1
        // cont ++
    }

    /* FOR */
    console.log(`\n************* TESTANDO FOR *************`)
    // Na estrutura for é obrigatório usar ++ na atualização da variável contadora
    for (cont = 0; cont <= 10; cont++) {
        resultado = tabuada * cont
        console.log(`${tabuada} x ${cont} = ${resultado}`)
    }
}

module.exports = {
    calcularTabuada
}