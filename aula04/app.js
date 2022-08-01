console.log('Calculadora Simples')

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
entradaDados.question('Digite o 1º número: ', function (valor1){
    // Conversão do valor1 (String) para Float
    let numero1 = parseFloat(valor1)
    /* O comando 'typeof()' retorna qual é o tipo de dados da variável ou um objeto; console.log(typeof(valor1)) = String */

    // Entrada do valor2
    entradaDados.question('Digite o 2º número: ', function (valor2){
        let numero2 = parseFloat(valor2)

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log('ERRO, DIGITE OS NÚMEROS NOVAMENTE')
            exit()
        }

        entradaDados.question('Informe a operação:\n[+]SOMAR\n[-]SUBTRAIR\n[*]MULTIPLICAR\n[/]DIVIDIR\n:', function (opcao){
            // toUpperCase() - convente em MAIÚSCULO
            // toLowerCase() - converte em minúsculo
            // Converte o texto digitado pelo usuário em minúsculo
            let operacao = opcao.toLowerCase()
            let erro = false
            let resultado

            // Chama a função que realizará os cálculos matemáticos
            resultado = calcular(numero1, numero2, operacao)

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

            if (erro) {
                console.log(resultado)
                // Comando que encerra o programa
                exit()
            } else {
                console.log('O resultado da operação é ' + resultado.toFixed(2))
                entradaDados.close()
            }
        })
    })
})

// Método tradicional de se criar uma função
function calcular(valor1, valor2, opcaoCalculo) {
    // Criando variáveis locais para receber o conteúdo dos argumentos que foram encaminhados na function
    let numero1 = valor1
    let numero2 = valor2
    let operacao = opcaoCalculo.toLowerCase()
    // Criando novamente a variável resultado (escopo local)
    let resultado

    switch (operacao) {
        case 'somar':
        case '+':
            resultado = numero1 + numero2
            break
        case 'subtrair':
        case '-':
            resultado = numero1 - numero2
            break
        case 'multiplicar':
        case '*':
            resultado = numero1 * numero2
            break
        case 'dividir':
        case '/':
            if (numero2 == 0){
                resultado = 'ERRO, NÃO É POSSÍVEL DIVIDIR POR 0'
                erro = true
            } else {
                resultado = numero1 / numero2
            }
            break
        default:
            resultado = 'ERRO INESPERADO, REPITA O PROCESSO'
            erro = true
    }   
    return resultado
}