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

entradaDados.question(`DIGITE O NOME DO ALUNO(A): `, function (nome)
{
    let nomeAluno = nome.toUpperCase()

    if (nomeAluno == '')
    {
        console.log(`O NOME DO ALUNO(A) DEVE SER INFORMADO`)
        exit()
    }
    else 
    {
        entradaDados.question(`DIGITE O SEXO DO ALUNO(A) (MASCULINO/FEMININO): `, function (sexo)
        {
            let sexoAluno = sexo.toUpperCase()

            if (sexoAluno == '')
            {
                console.log(`O SEXO DO ALUNO(A) DEVE SER INFORMADO`)
                exit()
            }
            else 
            {
                entradaDados.question(`DIGITE O NOME DO PROFESSOR(A): `, function (nome)
                {
                    let nomeProf = nome.toUpperCase()

                    if (nomeProf == '')
                    {
                        console.log(`O NOME DO PROFESSOR(A) DEVE SER INFORMADO`)
                        exit()
                    }
                    else
                    {
                        entradaDados.question(`DIGITE O SEXO DO PROFESSOR(A) (MASCULINO/FEMININO): `, function (sexo)
                        {
                            let sexoProf = sexo.toUpperCase()

                            if (sexoProf == '')
                            {
                                console.log(`O SEXO DO PROFESSOR(A) DEVE SER INFORMADO`)
                                exit()
                            }
                            else
                            {
                                entradaDados.question(`DIGITE O NOME DO CURSO: `, function (curso)
                                {
                                    let nomeCurso = curso.toUpperCase()

                                    if (nomeCurso == '')
                                    {
                                        console.log(`O NOME DO CURSO DEVE SER INFORMADO`)
                                        exit()
                                    }
                                    else
                                    {
                                        entradaDados.question(`DIGITE O NOME DA DISCIPLINA: `, function (disciplina)
                                        {
                                            let nomeDisciplina = disciplina.toUpperCase()

                                            if (nomeDisciplina == '')
                                            {
                                                console.log(`O NOME DA DISCIPLINA DEVE SER INFORMADO`)
                                                exit()
                                            }
                                            else
                                            {
                                                entradaDados.question(`DIGITE A 1ª NOTA DO ALUNO: `, function (valor1)
                                                {
                                                    let nota1 = parseFloat(valor1)

                                                    entradaDados.question(`DIGITE A 2ª NOTA DO ALUNO: `, function (valor2)
                                                    {
                                                        let nota2 = parseFloat(valor2)

                                                        entradaDados.question(`DIGITE A 3ª NOTA DO ALUNO: `, function (valor3)
                                                        {
                                                            let nota3 = parseFloat(valor3)

                                                            entradaDados.question(`DIGITE A 4ª NOTA DO ALUNO: `, function (valor4)
                                                            {
                                                                let nota4 = parseFloat(valor4)
                                                                let notaMedia
                                                                let status

                                                                notaMedia = parseFloat(calcularMedia(nota1, nota2, nota3, nota4))
                                                                let notaExame = 0
                                                                let mediaExame = 0

                                                                if (notaMedia >= 70)
                                                                {
                                                                    status = `APROVADO`
                                                                    // SAÍDA DE DADOS
                                                                    if (sexoAluno == `MASCULINO`)
                                                                    {
                                                                        console.log(`\nO ALUNO ${nomeAluno} FOI ${status} NA DISCIPLINA ${nomeDisciplina}`)
                                                                        console.log(`NOTAS DO ALUNO: ${nota1}, ${nota2}, ${nota3}, ${nota4}, NOTA DO EXAME:${notaExame}`)
                                                                    }
                                                                    else
                                                                    {
                                                                        console.log(`A ALUNA ${nomeAluno} FOI ${status} NA DISCIPLINA ${nomeDisciplina}`)
                                                                        console.log(`NOTAS DA ALUNA: ${nota1}, ${nota2}, ${nota3}, ${nota4}, NOTA DO EXAME:${notaExame}`)
                                                                    }
                                                                    console.log(`CURSO: ${nomeCurso}`)
                                                                    if (sexoProf == `MASCULINO`)
                                                                    {
                                                                        console.log(`PROFESSOR: ${nomeProf}`)
                                                                    }
                                                                    else
                                                                    {
                                                                        console.log(`PROFESSORA: ${nomeProf}`)
                                                                    }
                                                                    console.log(`MÉDIA FINAL: ${notaMedia}`)
                                                                    console.log(`MÉDIA FINAL DO EXAME: ${mediaExame}`)
                                                                    exit()
                                                                }
                                                                else if (notaMedia < 50)
                                                                {
                                                                    status = `REPROVADO`
                                                                    // SAÍDA DE DADOS
                                                                    if (sexoAluno == `MASCULINO`)
                                                                    {
                                                                        console.log(`\nO ALUNO ${nomeAluno} FOI ${status} NA DISCIPLINA ${nomeDisciplina}`)
                                                                        console.log(`NOTAS DO ALUNO: ${nota1}, ${nota2}, ${nota3}, ${nota4}, NOTA DO EXAME:${notaExame}`)
                                                                    }
                                                                    else
                                                                    {
                                                                        console.log(`A ALUNA ${nomeAluno} FOI ${status} NA DISCIPLINA ${nomeDisciplina}`)
                                                                        console.log(`NOTAS DA ALUNA: ${nota1}, ${nota2}, ${nota3}, ${nota4}, NOTA DO EXAME:${notaExame}`)
                                                                    }
                                                                    console.log(`CURSO: ${nomeCurso}`)
                                                                    if (sexoProf == `MASCULINO`)
                                                                    {
                                                                        console.log(`PROFESSOR: ${nomeProf}`)
                                                                    }
                                                                    else
                                                                    {
                                                                        console.log(`PROFESSORA: ${nomeProf}`)
                                                                    }
                                                                    console.log(`MÉDIA FINAL: ${notaMedia}`)
                                                                    console.log(`MÉDIA FINAL DO EXAME: ${mediaExame}`)
                                                                    exit()
                                                                }
                                                                else
                                                                {
                                                                    console.log(`MÉDIA: ${notaMedia} - ALUNO EM EXAME`)
                                                                    entradaDados.question(`DIGITE A NOTA DO EXAME: `, function (valor)
                                                                    {
                                                                        notaExame = parseFloat(valor)
                                                                        mediaExame = parseFloat((notaExame + notaMedia) / 2)

                                                                        if (mediaExame >= 60)
                                                                        {
                                                                            status = `APROVADO EM EXAME`
                                                                        
                                                                            // SAÍDA DE DADOS
                                                                            if (sexoAluno == `MASCULINO`)
                                                                            {
                                                                                console.log(`\nO ALUNO ${nomeAluno} FOI ${status} NA DISCIPLINA ${nomeDisciplina}`)
                                                                                console.log(`NOTAS DO ALUNO: ${nota1}, ${nota2}, ${nota3}, ${nota4}, NOTA DO EXAME:${notaExame}`)
                                                                            }
                                                                            else
                                                                            {
                                                                                console.log(`A ALUNA ${nomeAluno} FOI ${status} NA DISCIPLINA ${nomeDisciplina}`)
                                                                                console.log(`NOTAS DA ALUNA: ${nota1}, ${nota2}, ${nota3}, ${nota4}, NOTA DO EXAME:${notaExame}`)
                                                                            }
                                                                            console.log(`CURSO: ${nomeCurso}`)
                                                                            if (sexoProf == `MASCULINO`)
                                                                            {
                                                                                console.log(`PROFESSOR: ${nomeProf}`)
                                                                            }
                                                                            else
                                                                            {
                                                                                console.log(`PROFESSORA: ${nomeProf}`)
                                                                            }
                                                                            console.log(`MÉDIA FINAL: ${notaMedia}`)
                                                                            console.log(`MÉDIA FINAL DO EXAME: ${mediaExame}`)
                                                                            exit()
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        })
                                                    })
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})