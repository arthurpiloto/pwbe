/******************************************************************
OBJETIVO: CRIAÇÃO DE FUNÇÕES PARA CALCULAR MÉDIA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/

const calcularMedia = function (valor1, valor2, valor3, valor4) {
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    console.log(`Média = ${media}`)

    if (media >= 70) {
        console.log(`Aluno aprovado`)
    } else if (media >= 50 && media <= 69) {
        console.log(`Aluno em exame`)
    } else {
        console.log(`Aluno reprovado`)
    }
}

module.exports = {
    calcularMedia
}