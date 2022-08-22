/*************************************************
Objetivo: Aula sobre Array List
Autor: Arthur Piloto Silva
Data de criação: 22/08/2022
Versão: 1.0
**************************************************/

/* CRIAÇÃO DE UM ARRAY
nome = []

Guardando itens no array
nome[0] = `José`
nome[1] = `João`

Também é possível trabalhar com 
mais de uma direção, ou seja, linhas e colunas.
É criada uma tabela tabela, mas não é muito utilizada

dados[0][1] = `A primeira chave representa linha e a segunda coluna`
*/

// Define uma variável do tipo Array e atribui valores para cada índice após a vírgula
const listaNomes = [`José`, `Maria`, `Carlos`]
const listaProdutos = [`Teclado`, `branco`, 50.80, true]
const listaAlunos = [`Carol`, `Milena`, `Ana`, `Heitor`, `Japa`, `Larissa`]
const listaDisciplinas = [`PWBE`, `PWFE`, `BCD`, `IDM`]

// Exibindo todos os dados de um Array
console.log(listaNomes)
console.log(listaProdutos)

// Verificando o tipo de dados de um Array
console.log(typeof(listaProdutos))
// Verificando o tipo de um elemento específico
console.log(typeof(listaProdutos[0]))

// Exibindo os valores de elementos específicos de um Array
console.log(`O produto é: ` + listaProdutos[0])
console.log(`A cor do produto é: ` + listaProdutos[1])

// Exibindo a quantidade de elementos dentro de um Array
console.log(`A quantidade de itens é: ` + listaProdutos.length)

// Extraindo valores do Array com estruturas de repetição
let qtde = listaAlunos.length
let cont = 0

// Exemplo utilizando while
console.log(`\nEXEMPLO UTILIZANDO WHILE`)
while (cont < qtde)
{
    console.log(`O aluno da turma DS2M é: ` + listaAlunos[cont])
    cont++
}

// Exemplo utilizando for
console.log(`\nEXEMPLO UTILIZANDO FOR`)
for (let cont = 0; cont < qtde; cont++)
{
    console.log(`O aluno da turma DS2M é: ` + listaAlunos[cont])
}

// Exemplo utilizando forEach
console.log(`\nEXEMPLO UTILIZANDO FOREACH`)
listaAlunos.forEach(function (item)
{
    console.log(`O aluno da turma DS2M é: ` + item)
})

// Adiciona novos elementos no Array no final
listaAlunos.push(`Arthur`, `Vinícius`)
listaAlunos.push(`Leonardo`)
console.log(listaAlunos)

// Remove elementos do Array no final
listaAlunos.pop()

// Adiciona novos elementos no Array no início
listaAlunos.unshift(`Enzo`)
console.log(listaAlunos)

// Remove elementos do Array no início
listaAlunos.shift()

listaAlunos.forEach(function (item)
{
    console.log(`O aluno da turma DS2M é: ` + item)
})

// Pesquisando valores em um Array e retornando seu índice
    // Se o retorno for -1, significa que não foi encontrado o item
let indice = listaAlunos.indexOf(`Ana`)
console.log(indice)

// Cria uma cópia do Array em uma nova variável que será o Array
const listaNovosAlunos = listaAlunos.slice()
console.log(listaNovosAlunos)

// Removendo elementos a partir de um índice
    // Remove somente o item escolhido
listaAlunos.splice(indice, 1)
console.log(listaAlunos)
// Remove todos os itens a partir do primeiro até o escolhido
listaAlunos.splice(0, indice+1)
console.log(listaAlunos)
    // Remove todos os itens a partir do escolhido
listaAlunos.splice(indice)
console.log(listaAlunos + `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`)

console.log(`TRABALHANDO COM ARRAY DENTRO DE ARRAY`)
// Adicionando um Array dentro de outro Array
listaNovosAlunos.push(listaDisciplinas)
// Lista o Array principal e todos os sub-Arrays existentes
console.log(listaNovosAlunos)
// Exibe o primeiro elemento do Array contido dentro do índice 8 do Array principal
console.log(listaNovosAlunos[8][0])