/******************************************************************
OBJETIVO: EXERCÍCIO PARA TREINAR OS CONTEÚDOS VISTOS EM AULA
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 04/08/2022
VERSÃO: 1.0
******************************************************************/
console.log(`EXERCÍCIO 01`)

const { calcularMedia } = require(`./modulos/media.js`)
const { exit } = require("process")
var readline = require(`readline`)
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question(`DIGITE O NOME DO ALUNO E O SEU SEXO(MASC/FEM): `, function (nome, sexo)
{
    let nomeAluno = nome
    const sexoAluno = sexo.charAt(sexo.length - 1)

    if (nomeAluno == '' || sexoAluno == '')
    {
        console.log(`O NOME DO ALUNO E O SEU SEXO DEVEM SER INFORMADOS`)
        exit()
    }
    else 
    {
        entradaDados.question(`DIGITE O NOME DO PROFESSOR E O SEU SEXO(MASC/FEM): `, function (nome, sexo)
        {
            let nomeProf = nome
            let sexoProf = sexo

            if (nomeProf == '' || sexoProf == '')
            {
                console.log(`O NOME DO PROFESSOR E O SEU SEXO DEVEM SER INFORMADOS`)
                exit()
            }
            else 
            {
                entradaDados.question(`DIGITE O NOME DO CURSO E DA DISCIPLINA: `, function (nome1, nome2)
                {
                    let nomeCurso = nome1
                    let nomeDisciplina = nome2

                    if (nomeCurso == '' || nomeDisciplina == '')
                    {
                        console.log(`O NOME DO CURSO E DA DISCIPLINA DEVEM SER INFORMADOS`)
                        exit()
                    }
                    else
                    {
                        entradaDados.question(`DIGITE AS QUATRO NOTAS: `, function (valor1, valor2, valor3, valor4)
                        {
                            let nota1 = valor1
                            let nota2 = valor2
                            let nota3 = valor3
                            let nota4 = valor4

                            if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')
                            {
                                console.log(`TODAS AS NOTAS DEVEM SER INFORMADAS`)
                                exit()
                            }
                            else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100)
                            {
                                console.log(`TODAS AS NOTAS DEVEM ESTAR ENTRE 0 E 100 PONTOS`)
                                exit()
                            }
                            else if (sexoAluno == `masculino`)
                            {

                            }
                        })
                    }
                })
            }
        })
    }
})