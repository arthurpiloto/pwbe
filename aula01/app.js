// Exibe uma mensagem no prompt
console.log("Testando o NodeJS")

/* 
variáveis podem ser criadas de três modos:
• let
• var
• const
*/

// require (import) da biblioteca de interação com o usuário
var readline = require('readline')

// instância do objeto para entrada e saída de dados via prompt
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Coloca uma mensagem no prompt para o usuário e o que for digitado é enviado através de uma função de call back
entradaDados.question("Digite seu nome: ", function (nome) {
    console.log("Bem vindo, " + nome + ".")
})