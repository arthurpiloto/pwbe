use db_lionschool;
show tables;

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

drop table tbl_usuario;

insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('José da Silva', 'https://cdn-icons-png.flaticon.com/512/1373/1373255.png', 'M', 
	'34.456.666-1', '300.567.456-23', 'jose@gmail.com', '011 4556-7777', '011 9 9765-6660', '2000-04-10');
    
insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Maria da Silva', 'https://cdn-icons-png.flaticon.com/512/1373/1373254.png', 'F',
    '23.988.98-1', '304.567.345-09', 'maria@gmail.com', '011 4678-7666', '011 9 8709-0988', '1990-10-10');
    
select * from tbl_aluno;

insert into tbl_aluno (nome, foto, sexo, rg, cpf, email, telefone, celular, data_nascimento)
	values ('Maria Antonieta', 'https://cdn-icons-png.flaticon.com/512/1373/1373254.png', 'F',
    '33.954.87-2', '566.089.666-90', 'maria.antonieta@gmail.com', '011 3666-5768', '011 9 9026-0643', '2004-01-06');
    
delete from tbl_aluno where id = 3;

# Seleciona o id, entretanto converte o retorno para float (a conversão para int não funciona)
	# O comando após o cast (as id) muda o nome de exibição da coluna para id, pois quando o cast é executado o nome de exibição da coluna é mudado
select cast(id as float) as id, nome from tbl_aluno;