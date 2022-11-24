/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE DADOS 
COM O BD (insert, update, delete e select)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 31/10/2022
VERSÃO: 1.0
************************************************************************/
const { PrismaClient } = require(`@prisma/client`)
const prisma = new PrismaClient()

// FUNÇÃO PARA INSERIR UM NOVO CURSO NO BD
const insertCurso = async (curso) => {
    try {
        let sql =  `insert into tbl_curso (nome, sigla, carga_horaria, icone)
        values ('${curso.nome}', '${curso.sigla}', '${curso.carga_horaria}', '${curso.icone}');`

        const result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return false   
    }
}

// FUNÇÃO PARA ATUALIZAR UM CURSO NO BD
const updateCurso = async (curso) => {
    try {
        let sql =  `update tbl_curso set nome = '${curso.nome}', sigla = '${curso.sigla}', carga_horaria = '${curso.carga_horaria}', icone = '${curso.icone}' where id = ${curso.id};`

        const result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return false   
    }
}

// FUNÇÃO PARA EXCLUIR UM CURSO NO BD
const deleteCurso = async (id) => {
    try {
        let sql = `delete from tbl_curso where id = ${id}`
        
        const result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            return true
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

// FUNÇÃO PARA RETORNAR TODOS OS CURSOS DO BD
const selectAllCursos = async () => {
    try {
        let sql = `select cast(id as float) as id, nome, sigla, carga_horaria, icone from tbl_curso order by id desc`

        const result = await prisma.$queryRawUnsafe(sql)

        if (result.length > 0) {
            return result
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

// FUNÇÃO PARA RETORNAR APENAS UM CURSO DO BD
const selectCursoById = async (id) => {
    try {
        let sql = `select cast(id as float) as id, nome, sigla, carga_horaria, icone from tbl_curso where id = ${id}`

        const result = await prisma.$queryRawUnsafe(sql)

        if (result.length > 0) {
            return result
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

module.exports = {
    insertCurso,
    updateCurso,
    deleteCurso,
    selectAllCursos,
    selectCursoById
}