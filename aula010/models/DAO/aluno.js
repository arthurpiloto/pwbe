/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE DADOS 
COM O BD (insert, update, delete e select)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 06/10/2022
VERSÃO: 1.0
************************************************************************/

// Import da Classe PrismaClient, responsável pelas interações com o BD
const { PrismaClient } = require(`@prisma/client`)
// Instância da Classe PrismaClient. Criação de um Objeto
const prisma = new PrismaClient()

// Função para inserir um novo registro no BD
const insertAluno = async (aluno) => {
    try {
        let sql =  `insert into tbl_aluno (nome, foto, rg, cpf, email, data_nascimento, telefone, celular, sexo)
        values ('${aluno.nome}', '${aluno.foto}', '${aluno.rg}', '${aluno.cpf}', '${aluno.email}', '${aluno.data_nascimento}', '${aluno.telefone}', '${aluno.celular}', '${aluno.sexo}')`

        // EXECUTA O SCRIPT SQL NO BANCO DE DADOS. ESSE COMANDO PERMITE ENCAMINHAR UMA VARIÁVEL CONTENDO O SCRIPT
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

// Função para atualizar um registro no BD
const updateAluno = async (aluno) => {
    try {
        let sql = `update tbl_aluno set nome = '${aluno.nome}', foto = '${aluno.foto}', rg = '${aluno.rg}', cpf = '${aluno.cpf}', email = '${aluno.email}', data_nascimento = '${aluno.data_nascimento}', telefone = '${aluno.telefone}', celular = '${aluno.celular}', sexo = '${aluno.sexo}' where id = ${aluno.id}`

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

// Função para excluir um registro no BD
const deleteAluno = async (id) => {
    try {
        let sql = `delete from tbl_aluno where id = ${id}`
        
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

// Função para retornar todos os registros do BD
const selectAllAlunos = async () => {
    try {
        // Cria um Objeto do tipo RecordSet (rsAlunos) para receber os dados do BD através do script SQL (select)
        const rsAlunos = await prisma.$queryRaw `select cast(id as float) as id, nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento from tbl_aluno order by id desc;`
        
        if (rsAlunos.length > 0) {
            return rsAlunos
        }
        return false
    } catch (err) {
        return false
    }
}

// FUNÇÃO PARA RETORNAR APENAS O 
const selectAlunoById = async (id) => {
    try {
        let sql = `select cast(id as float) as id, nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento from tbl_aluno where id = ${id};`
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
    insertAluno,
    updateAluno,
    deleteAluno,
    selectAllAlunos,
    selectAlunoById
}