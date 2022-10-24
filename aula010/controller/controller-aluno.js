/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE RECEBIMENTO,
TRATAMENTO E RETORNO DE DADOS ENTRE A API E A MODEL
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 06/10/2022
VERSÃO: 1.0
************************************************************************/

const { insertAluno, updateAluno, deleteAluno, selectAllAlunos } = require(`../models/DAO/aluno.js`)
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require(`../modules/config.js`)

// Função para gerar um registro
const novoAluno = async (aluno) => {
    // VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS NO BANCO DE DADOS
    if (aluno.nome == `` || aluno.nome == undefined || aluno.foto == `` || aluno.foto == undefined || aluno.rg == `` || aluno.rg == undefined || aluno.cpf == `` || aluno.cpf == undefined || aluno.email == `` || aluno.email == undefined || aluno.data_nascimento == `` || aluno.data_nascimento == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    // VALIDAÇÃO PARA VERIFICAR EMAIL VÁLIDO
    } else if (!aluno.email.includes(`@`)) {
        return {status: 400, message: MESSAGE_ERROR.INVALID_EMAIL}
    } else {
        // CHAMA A FUNÇÃO PARA INSERIR UM NOVO ALUNO
        const result = await insertAluno(aluno)

        if (result) {
            return {status: 201, message: MESSAGE_SUCCESS.INSERT_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// Função para atualizar um registro
const atualizarAluno = async (aluno) => {
    if (aluno.id == `` || aluno.id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else if (aluno.nome == `` || aluno.nome == undefined || aluno.foto == `` || aluno.foto == undefined || aluno.rg == `` || aluno.rg == undefined || aluno.cpf == `` || aluno.cpf == undefined || aluno.email == `` || aluno.email == undefined || aluno.data_nascimento == `` || aluno.data_nascimento == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else if (!aluno.email.includes(`@`)) {
        return {status: 400, message: MESSAGE_ERROR.INVALID_EMAIL}
    } else {
        // CHAMA FUNÇÃO PARA ATUALIZAR UM REGISTRO DE ALUNO
        const result = await updateAluno(aluno)

        if (result) {
            return {status: 200, message: MESSAGE_SUCCESS.UPDATE_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// Função para excluir um registro
const excluirAluno = async (id) => {
    if (id == `` || id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else {
        const result = await deleteAluno(id)

        if (result) {
            return {status: 200, message: MESSAGE_SUCCESS.DELETE_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// Função para retornar todos os registros
const listarAlunos = async () => {
    const { selectAllAlunos } = require(`../models/DAO/aluno.js`)

    const dadosAlunos = await selectAllAlunos()
    
    let dadosAlunosJSON = {}
    if (dadosAlunos) {
        // CONVERSÃO DO TIPO DE DADOS BIGINT PARA INT (???????)
        // dadosAlunos.forEach(element => {
        //     element.id = Number(element.id)
        // })

        // CRIAMOS UMA CHAVE ALUNOS NO JSON PARA RETORNAR O ARRAY DE ALUNOS
        dadosAlunosJSON.alunos = dadosAlunos
        return dadosAlunosJSON
    }
    return false
}

module.exports = {
    novoAluno,
    atualizarAluno,
    excluirAluno,
    listarAlunos
}