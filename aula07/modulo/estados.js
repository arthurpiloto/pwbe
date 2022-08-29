/******************************************************************
OBJETIVO: OBTER UMA LISTA DE ESTADOS. EXERCÍCIO FEITO JUNTO COM 
O PROFESSOR, USO DE ARRAY E JSON
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 29/08/2022
VERSÃO: 1.0
******************************************************************/

// Simulando o resultado de uma API
var estados = [
    {
        sigla: `SP`,
        nome: `São Paulo`
    },
    {
        sigla: `AC`,
        nome: `Acre`
    },
    {
        sigla: `RJ`,
        nome: `Rio de Janeiro`
    },
    {
        sigla: `BA`,
        nome: `Bahia`
    },
    {
        sigla: `CE`,
        nome: `Ceará`
    },
    {
        sigla: `MG`,
        nome: `Minas Gerais`
    },
    {
        sigla: `GO`,
        nome: `Goiás`
    },
]

// Retorna todos os estados pela sigla
const getSiglaEstados = function () {
    let listaEstados = []
    let erro = true

    estados.forEach(item => {
        listaEstados.push(item.sigla)
        erro = false
    })
    
    if (erro) {
        return false
    } else {
        return listaEstados
    }
}