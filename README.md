# Programação Web Front-End
Conteúdo das aulas de Programação Web Front-End

Website Front ← - - - API - - - Back-End ← - - - → Banco de Dados

## Linguagens mais usadas:
- Java
- JavaScript.
- PHP
- Python
- C#

Cada linguagem é usada de forma diferente de acordo com o que o projeto necessita.

Cada Linguagem trabalha com uma quantidade máxima de requisições por segundo do cliente para o Banco.

Muitos erros podem acontecer. A Linguagem pode não suportar as suas necessidades, o Servidor pode não ser o ideal, o Banco de Dados não está suportando as requisições.

## JavaScript
No JS tudo que é feito é necessário através de funções. Existe a criação da função da forma padrão e de callback.

A função de callback é aquela que é criada na mesma linha do código. É recomendável preservar o conteúdo inicial de uma variável criada numa função de callback.

Há algumas formas de criar uma variável:
- var = variável de escopo global.
Essa variável terá existência em todas as partes do projeto, ou seja, todas as funções terão acesso a ela.
- let = variável de escopo local.
Essa variável terá existência somente na função que está sendo utilizada, ou seja, ela não existirá em outros momentos senão quando há a execução da função que ela habita.
- const = variável constante, que nunca muda.

A tipagem no JS não é feita na criação da variável, o formato padrão é sempre String, mas, quando necessário nós temos que convertê-la.

## Node
Faz a “interpretação” do código, dependendo da linguagem escolhida o tipo de serviço necessário no Servidor é diferente. Para rodar o JavaScript no Servidor é necessário o Node.JS. O Node é o serviço que permite interpretar o JavaScript no Back-End.

O Node.Js permite JavaScript full-stack, ou seja, te permite trabalhar no Back e no Front. Muitas empresas grandes usam o Node e o JavaScript. O arquivo principal padrão é, geralmente, chamado de "app.js”.
### NPM
É um dos gerenciadores de pacotes do Node. É usado para instalar várias dependências necessárias quando se está trabalhando com o Node.

## API
É uma ponte entre o Front e o Back, ela converte os dados que vêm do Banco de Dados.