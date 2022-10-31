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
        let sql =  `insert into tbl_aluno_curso (id_aluno, id_curso)
        values ('${alunoCurso.id_aluno}', '${alunoCurso.id_curso}');`

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

module.exports = {
    insertAlunoCurso
}