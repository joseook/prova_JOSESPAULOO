import mysqlPool from "../config/mysqlConnect.js";

const tablePalestrante = `
create table if not exists palestrantes (
    id varchar(60) primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    telefone varchar(255) not null,
    empresa varchar(255) default null,
    expertise varchar(255) not null,
    trabalhos_recentes varchar(500) not null,
    imagem varchar(255),
    created_at timestamp default CURRENT_TIMESTAMP,
    updated_at timestamp default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP
    );
`

mysqlPool.query(tablePalestrante, (err) => {
    if (err) throw err;
    console.log("Tabela palestrantes criada!");
});
