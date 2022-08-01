/***********************************************************************************
* Objetivo: Arquivo que contêm todas as funções para cálculos matemáticos
* Autor: Arthur Piloto
* Data de criação: 01/08/2022
* Versão: 1.0
************************************************************************************/

/*
// Método tradicional de se criar uma função
// Formato menos utilizado
function calcular(valor1, valor2, opcaoCalculo) {
    // Criando variáveis locais para receber o conteúdo dos argumentos que foram encaminhados na function
    let numero1 = valor1
    let numero2 = valor2
    let operacao = opcaoCalculo.toLowerCase()
    // Criando novamente a variável (escopo local)
    let resultado
    let erro = false

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
                console.log('ERRO, NÃO É POSSÍVEL DIVIDIR POR 0')
                erro = true
                exit()
            } else {
                resultado = numero1 / numero2
            }
            break
        default:
            console.log('ERRO INESPERADO, REPITA O PROCESSO')
            erro = true
            exit()
    }
    
    if (erro) {
        return false
    } else {
        return resultado
    }
}
*/

// Método de criação de função utilizando padrão de Call Back
// Formato mais usado para criação de funções
const calcular = function(valor1, valor2, opcaoCalculo) {
    // Criando variáveis locais para receber o conteúdo dos argumentos que foram encaminhados na function
    let numero1 = valor1
    let numero2 = valor2
    let operacao = opcaoCalculo.toLowerCase()
    // Criando novamente a variável (escopo local)
    let resultado
    let erro = false

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
                console.log('ERRO, NÃO É POSSÍVEL DIVIDIR POR 0')
                erro = true
                exit()
            } else {
                resultado = numero1 / numero2
            }
            break
        default:
            console.log('ERRO INESPERADO, REPITA O PROCESSO')
            erro = true
            exit()
    }
    
    if (erro) {
        return false
    } else {
        return
    }
}

// Para a função existir para importação em outros arquivos é obrigatório fazer:
// As funções que não forem incluídas, irão funcionar apenas localmente
module.exports = {
    calcular
}