/************************************************************************
OBJETIVO: ARQUIVO RESPONSÁVEL PELA MANIPULAÇÃO DE DADOS 
COM O BD (insert, update, delete e select)
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 06/10/2022
VERSÃO: 1.0
************************************************************************/

// Função para inserir um novo registro no BD
const insertAluno = async (aluno) => {

}

// Função para atualizar um registro no BD
const updateAluno = async (aluno) => {

}

// Função para excluir um registro no BD
const deleteAluno = async (id) => {

}

// Função para retornar todos os registros do BD
const selectAllAlunos = async () => {
    // Import da Classe PrismaClient, responsável pelas interações com o BD
    const { PrismaClient } = require(`@prisma/client`)
    // Instância da Classe PrismaClient. Criação de um Objeto
    const prisma = new PrismaClient()
    
    // Cria um Objeto do tipo RecordSet (rsAlunos) para receber os dados do BD através do script SQL (select)
    const rsAlunos = await prisma.$queryRaw `select * from tbl_aluno`
    
    if (rsAlunos.length > 0) {
        return rsAlunos
    }
    return false
}