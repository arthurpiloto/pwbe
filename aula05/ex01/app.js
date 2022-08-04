console.log('Calculadora Simples')

// Import da função calcular
// Normalmente os imports são declarados como const
const { calcular } = require('./modulos/calculadora.js')

const { exit } = require('process')
var readline = require('readline')
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

/*
= -> atribuição
== -> comparação de conteúdos
=== -> comparação de conteúdo e tipo de dados
*/

// Entrada do valor1
entradaDados.question('Digite o 1º número: ', function (valor1) {
    // Conversão do valor1 (String) para Float
    let numero1 = parseFloat(valor1)
    /* O comando 'typeof()' retorna qual é o tipo de dados da variável ou um objeto; console.log(typeof(valor1)) = String */

    // Entrada do valor2
    entradaDados.question('Digite o 2º número: ', function (valor2) {
        let numero2 = parseFloat(valor2)

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log('ERRO, DIGITE OS NÚMEROS NOVAMENTE')
            exit()
        }

        entradaDados.question('Informe a operação:\n[+]SOMAR\n[-]SUBTRAIR\n[*]MULTIPLICAR\n[/]DIVIDIR\n:', function (opcao) {
            // toUpperCase() - convente em MAIÚSCULO
            // toLowerCase() - converte em minúsculo
            // Converte o texto digitado pelo usuário em minúsculo
            let operacao = opcao.toLowerCase()
            let resultado

            // Chama a função que realizará os cálculos matemáticos, verifica se há erro e retorna a mensagem na tela
            if (resultado = calcular(numero1, numero2, operacao)) {
                console.log('O resultado da operação é: ' + resultado)
                exit()
            }

            /*
            if (isNaN(numero1) || isNaN(numero2)) {
                resultado = 'ERRO, DIGITE OS NÚMEROS NOVAMENTE'
                erro = true
            } else {
                if (operacao == 'somar' || operacao == '+') {
                    resultado = numero1 + numero2
                } else if (operacao == 'subtrair' || operacao == '-') {
                    resultado = numero1 - numero2
                } else if (operacao == 'multiplicar' || operacao == '*') {
                    resultado = numero1 * numero2
                } else if (operacao == 'dividir' || operacao == '/') {
                    if (numero2 == 0){
                        resultado = 'ERRO, NÃO É POSSÍVEL DIVIDIR POR 0'
                        erro = true
                    } else {
                        resultado = numero1 / numero2
                    }
                } else {
                    resultado = 'ERRO INESPERADO, REPITA O PROCESSO'
                    erro = true
                }
            }
            */
        })
    })
})