/* 
Há algumas formas de criar uma variável:
• var = variável de escopo global
    Essa variável terá existência em todas as partes do projeto, ou seja, todas as funções terão acesso a ela
• let = variável de escopo local
    Essa variável terá existência somente na função que está sendo utilizada, ou seja, ela não existirá em outros momentos senão quando há a execução da função que ela habita.
• const = variável constante, que nunca muda
*/
// Estruturas Condicionais = Estruturas de Condição
// Exercício para calcular a média

// Import da biblioteca de interação com usuário --- require = import
var readline = require ('readline')

// Instância do objeto para criar interação com usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada do nome do aluno
entradaDados.question('Digite o nome do aluno: ', function (nome) {
    // Declaração de variável local (let) e atribuindo valor
    let nomeAluno = nome
    // console.log('Nome do aluno: ' + nomeAluno)

    // Entrada da primeira nota do aluno
    entradaDados.question('Digite 1ª nota do aluno: ', function (nota1) {
        let valor1 = nota1

        // Entrada da segunda nota do aluno
        entradaDados.question('Digite a 2ª nota do aluno: ', function (nota2) {
            let valor2 = nota2

            // Entrada da terceira nota do aluno
            entradaDados.question('Digite a 3ª nota do aluno: ', function (nota3) {
                let valor3 = nota3

                // Entrada da quarta nota do aluno
                entradaDados.question('Digite a 4ª nota do aluno: ', function (nota4) {
                    let valor4 = nota4
                    let media

                    // Validação para nome do aluno
                    if (nomeAluno == '') {
                        console.log('O nome do aluno deve ser informado')
                        entradaDados.close()
                    // Validação para as notas
                    } else if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
                        console.log('O valor de todas as notas deve ser preenchido')
                        entradaDados.close()
                    } else {
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4
                        console.log('O aluno ['+ nomeAluno +'], teve nédia igual a [' + media.toFixed(1) + ']') // O comando toFixed() estabelece quantas casas serão mostradas após a vírgula
                    }

                    // Validação da média do aluno
                    if (media >= 7) {
                        console.log('Aluno aprovado')
                        entradaDados.close()
                    } else if (media <= 6.9 && media >= 4.0) {
                        console.log('Aluno em exame')
                        entradaDados.close()
                    } else {
                        console.log('Aluno reprovado')
                        entradaDados.close()
                    }

                    // O comando entradaDados.close() fecha o objeto ao final da execução do código

                    /*
                    FORMATO DO PROFESSOR

                    if (media >= 7) {
                        statusAluno = 'APROVADO'
                    } else if (media <= 6.9 && media >= 4.0) {
                        statusAluno = 'EXAME'
                    } else {
                        statusAluno = 'REPROVADO'
                    }

                    Há a criação de uma váriavel local (statusAluno) para não haver a redundância dos comandos de console.log e possibilitar a mensagem do status em apenas uma linha de código
                    */
                })
            })
        })
    })
})