console.log('Calculadora Simples')

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

        entradaDados.question('Informe a operação: [+]Somar [-]Subtrair [*]Multiplicar [/]Dividir: ', function (opcao){
            // toUpperCase() - convente em MAIÚSCULO
            // toLowerCase() - converte em minúsculo
            // Converte o texto digitado pelo usuário em minúsculo
            let operacao = opcao.toLowerCase()
            let erro = false
            let resultado

            /*
            if (operacao == 'somar' || operacao == '+') {
                resultado = numero1 + numero2
            } else if (operacao == 'subtrair' || operacao == '-') {
                resultado = numero1 - numero2
            } else if (operacao == 'multiplicar' || operacao == '*') {
                resultado = numero1 * numero2
            } else if (operacao == 'dividir' || operacao == '/') {
                resultado = numero1 / numero2
            } else {
                resultado = 'ERRO INESPERADO, REPITA O PROCESSO'
                erro = true
            }
            */

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
                    resultado = numero1 / numero2
                    break
                default:
                    resultado = 'ERRO INESPERADO, REPITA O PROCESSO'
                    erro = true
            }

            if (erro) {
                console.log(resultado)
                entradaDados.close()
            } else {
                console.log('O resultado da operação é ' + resultado.toFixed(2))
                entradaDados.close()
            }
        })
    })
})