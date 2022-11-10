/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE DADOS 
COM O BD (insert, update, delete e select)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 31/10/2022
VERSÃO: 1.0
************************************************************************/
const { PrismaClient } = require(`@prisma/client`)
const prisma = new PrismaClient()

// FUNÇÃO PARA INSERIR UM NOVO REGISTRO NO BD
const insertAlunoCurso = async (alunoCurso) => {
    try {
        let sql =  `insert into tbl_aluno_curso (id_aluno, id_curso, matricula, status_aluno)
        values (${alunoCurso.id_aluno}, ${alunoCurso.id_curso}, '${alunoCurso.matricula}', '${alunoCurso.status_aluno}');`

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

const selectAlunoCurso = async (alunoId) => {
    try {
        let sql = 
        `select cast(tbl_curso.id as float) as id_curso, tbl_curso.nome as nome_curso, tbl_curso.sigla as sigla_curso,
            tbl_curso.carga_horaria, tbl_aluno_curso.matricula, tbl_aluno_curso.status_aluno
        from tbl_aluno
            inner join tbl_aluno_curso
                on tbl_aluno.id = tbl_aluno_curso.id_aluno
            inner join tbl_curso
                on tbl_curso.id = tbl_aluno_curso.id_curso
        where tbl_aluno.id = ${alunoId}`

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
    insertAlunoCurso,
    selectAlunoCurso
}