show databases;

drop database db_contatos_20222;
# Permite apagar um database e toda a sua estrutura de tabelas e dados

create database db_lionschool;
# Permite criar um novo database no BD

use db_lionschool;
# Permite ativar a utilização de um database. Comando é parecido com entrar dentro de um local, dois cliques numa pasta.

show tables;
# Permite visualizar todas as tabelas existentes dentro de um database

# Primeiro são criadas as tabelas que fornecem as chaves estrangeiras.
create table tbl_aluno (
	id int UNSIGNED not null auto_increment primary key,
    nome varchar(100) not null,
    foto varchar(100) not null,
    sexo varchar(1),
    rg varchar(15) not null,
    cpf varchar(20) not null,
    email varchar(256) not null,
    telefone varchar(20),
    celular varchar(20),
    data_nascimento date not null,
    unique index(id)
);

create table tbl_curso (
	id int UNSIGNED not null auto_increment primary key,
    nome varchar(100) not null,
    sigla varchar(10),
    icone varchar(100),
    carga_horaria int not null,
    unique index(id)
);

create table tbl_aluno_curso (
	id int unsigned not null auto_increment primary key,
    id_aluno int unsigned not null,
	id_curso int unsigned not null,
    matricula varchar(15) not null,
    status_aluno varchar(15) not null,
    
    # Programação para definir uma chave estrangeira. Sempre tem que ser a última programação
    foreign key(id_aluno) # Define qual atributo será uma FK
		references tbl_aluno(id), # Define de onde virá a PK
	foreign key(id_curso)
		references tbl_curso(id),
    unique index(id)
);

# Permite visualizar todos os dados de todas as colunas de uma tabela
select * from tbl_aluno;

# Permite inserir dados dentro de uma tabela
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	# Qualquer atributo que não é do tipo inteiro sempre tem aspas simples ('')
    # A mesma sequência no insert tem que ser correspondente ao values, senão dará erro
	values ('José da Silva', 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png', 'M', 
	'34.456.666-1', '300.567.456-23', 'jose@gmail.com', '011 4556-7777', '011 9 9765-6660', '2000-04-10');
    
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Maria da Silva', 'https://cdn-icons-png.flaticon.com/512/1373/1373254.png', 'F', 
    '23.988.98-1', '304.567.345-09', 'maria@gmail.com', '011 4678-7666', '011 9 8709-0988', '1990-10-10');

# Permite atualizar dados dentro de uma tabela. Sempre devemos especificar qual será o registro que sofrerá alteração, geralmente sempre será a PK
update tbl_aluno set rg = '35.567.23-4' where id = 1;

# Permite apagar dados dentro de uma tabela. Sempre devemos especificar qual será o registro que sofrerá alteração, geralmente sempre será a PK
delete from tbl_aluno where id = 1;