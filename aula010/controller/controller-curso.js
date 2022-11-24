/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE RECEBIMENTO,
TRATAMENTO E RETORNO DE DADOS ENTRE A API E A MODEL
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 31/10/2022
VERSÃO: 1.0
************************************************************************/
const { insertCurso, updateCurso, deleteCurso, selectAllCursos, selectCursoById } = require(`../models/DAO/curso.js`)
const { MESSAGE_ERROR, MESSAGE_SUCCESS } = require(`../modules/config.js`)

// FUNÇÃO PARA GERAR UM NOVO CURSO
const novoCurso = async (curso) => {
    if (curso.nome == `` || curso.nome == undefined || curso.carga_horaria == `` || curso.carga_horaria == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else {
        const result = await insertCurso(curso)

        if (result) {
            return {status: 201, message: MESSAGE_SUCCESS.INSERT_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// FUNÇÃO PARA ATUALIZAR UM CURSO
const atualizarCurso = async (curso) => {
    if (curso.id == `` || curso.id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else if (curso.nome == `` || curso.nome == undefined || curso.carga_horaria == `` || curso.carga_horaria == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_FIELDS}
    } else {
        const result = await updateCurso(curso)

        if (result) {
            return {status: 200, message: MESSAGE_SUCCESS.UPDATE_ITEM}
        } else {
            return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
        }
    }
}

// FUNÇÃO PARA EXCLUIR UM CURSO
const excluirCurso = async (id) => {
    if (id == `` || id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else {
        const curso = await listarCursoPorId(id)
        
        if (curso){
            const result = await deleteCurso(id)

            if (result) {
                return {status: 200, message: MESSAGE_SUCCESS.DELETE_ITEM}
            } else {
                return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
            }
        } else {
            return {status: 404, message: MESSAGE_ERROR.NOT_FOUND_DB}
        }
    }
}

// FUNÇÃO PARA RETORNAR TODOS OS CURSOS
const listarCursos = async () => {
    const result = await selectAllCursos()
    let resultJSON = {}

    if (result) {
        resultJSON.cursos = result
        return resultJSON
    } else {
        return false
    }
}

// FUNÇÃO PARA RETORNAR UM CURSO PELO ID
const listarCursoPorId = async (id) => {
    if (id == `` || id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else {
        const result = await selectCursoById(id)
        let resultJSON = {}

        if (result) {
            resultJSON.curso = result
            return resultJSON
        } else {
            return false
        }
    }
}

module.exports = {
    novoCurso,
    atualizarCurso,
    excluirCurso,
    listarCursos,
    listarCursoPorId
}