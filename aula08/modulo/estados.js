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
    {
        sigla: `SC`,
        nome: `Santa Catarina`
    },
]

// Retorna todos os estados pela sigla
const getListEstados = function () {
    let listaEstados = []
    let erro = true

    estados.forEach (item => {
        listaEstados.push(item.sigla)
        erro = false
    })
    
    if (erro) {
        return false
    } else {
        // JSON.stringify = converte um Array para JSON
        return listaEstados
    }
}

// Retorna os dados de um estado, tendo como base a sigla
const getEstado = function (siglaEstado) {
    let sigla = siglaEstado
    // Cria um objeto do tipo JSON
    let estado = {}
    let erro = true
    
    if (typeof(sigla) != `undefined`)
        // Tratamento para validação de sigla vazia e com diferença de caracteres
        if (sigla != `` && sigla.length == 2) {
            estados.forEach (item => {
                // Localiza um item no array (indexOF)
                if (item.sigla.indexOf(sigla.toUpperCase()) == 0) {
                    // Criamos as chaves "sigla" e "nome" para enviar pelo JSON
                    estado.sigla = item.sigla,
                    estado.nome = item.nome
                    erro = false
                }
            })
        }

    if (erro) {
        return false
    } else {
        return estado
    }
}

module.exports = {
    getListEstados,
    getEstado
}