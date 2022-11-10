/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE RECEBIMENTO,
TRATAMENTO E RETORNO DE DADOS ENTRE A API E A MODEL
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 06/10/2022
VERSÃO: 1.0
************************************************************************/

const { insertAluno, updateAluno, deleteAluno, selectAllAlunos, selectAlunoById, selectLastId } = require(`../models/DAO/aluno.js`)
const { insertAlunoCurso, selectAlunoCurso } = require(`../models/DAO/aluno_curso.js`)
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
            // CHAMA A FUNÇÃO QUE VERIFICA QUAL FOI O ID GERADO PARA O NOVO ALUNO
            let resultId = await selectLastId()

            if(resultId > 0) {
                // OBJETO JSON PARA ALUNO_CURSO
                let alunoCurso = {}

                // RETORNA O ANO CORRENTE
                let anoMatricula = new Date().getFullYear()

                // GERA A MATRÍCULA DO ALUNO (ID_ALUNO + ID_CURSO + ANO CORRENTE)
                let numeroMatricula = `${resultId}${aluno.curso[0].id_curso}${anoMatricula}`

                // INSERINDO OS VALORES E AS CHAVES NO JSON
                alunoCurso.id_aluno = resultId
                alunoCurso.id_curso = aluno.curso[0].id_curso
                alunoCurso.matricula = numeroMatricula
                alunoCurso.status_aluno = 'Cursando'

                // CHAMA A FUNÇÃO PARA INSERIR NA TBL_ALUNO_CURSO
                const resultNovoAlunoCurso = await insertAlunoCurso(alunoCurso)

                if(resultNovoAlunoCurso) {
                    return {status:201, message: MESSAGE_SUCCESS.INSERT_ITEM}
                } else {
                    // CASO ACONTEÇA UM ERRO NESTE PROCESSO, OBRIGATORIAMENTE DEVERÁ SER EXCLUÍDO DO BD ESSE REGISTRO, JÁ QUE, NO CASO DE UM ERRO, ELE SERIA INSERIDO EM UMA TABELA MAS EM OUTRA NÃO, SENDO UM PROCESSAMENTO FEITO PELA METADE
                    await deleteAluno(resultId)
                    return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
                }

            } else {
                await deleteAluno(resultId)
                return {status: 500, message: MESSAGE_ERROR.INTERNAL_ERROR_DB}
            }
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

// FUNÇÃO PARA RETORNAR UM REGISTRO BASEADO NO ID
const listarAlunoPorId = async (id) => {
    if (id == `` || id == undefined) {
        return {status: 400, message: MESSAGE_ERROR.REQUIRED_ID}
    } else {
        const result = await selectAlunoById(id)
        let resultJSON = {}

        if (result) {
            const resultCurso = await selectAlunoCurso(id)

            if (resultCurso) {
                // CHAVE DO JSON QUE RETORNA O ARRAY DE ALUNO
                resultJSON.aluno = result

                // ADICIONA A CHAVE CURSO DENTRO DO OBJETO DOS DADOS DO ALUNO E INSERE OS DADOS DO CURSO REFERENTE AO ALUNO
                result[0].curso = resultCurso

                return resultJSON
            } else {
                resultJSON.aluno = result
                return resultJSON
            }
        }
    }
}

module.exports = {
    novoAluno,
    atualizarAluno,
    excluirAluno,
    listarAlunos,
    listarAlunoPorId
}