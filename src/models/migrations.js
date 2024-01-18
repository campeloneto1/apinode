const connection = require("./connetion");
require("dotenv").config();

const DB = process.env.MYSQL_DB;
const PREFIX = process.env.MYSQL_TB_PREFIX;

const createDB = async () => {
   const res =  await connection.execute(`CREATE DATABASE IF NOT EXISTS ${DB}`);
   return res;
}

const createTables = async () => {
    let querys = [];
    querys.push(await createTableUsers());
    querys.push(await createTablePerfis());
    return querys;
}

const createTableUsers = async () => {
    const name = `${PREFIX}_users`;
    const query = `CREATE TABLE IF NOT EXISTS ${name} (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT, 
    nome varchar(100) NOT NULL, 
    cpf varchar(11) NOT NULL, 
    PRIMARY KEY (id), 
    UNIQUE (cpf)
    )`;
    const res = await connection.execute(query);
    //console.log(res);
    return res;
}

const createTablePerfis = async () => {
    const name = `${PREFIX}_perfis`;
    const query = `CREATE TABLE IF NOT EXISTS ${name}  (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT, 
    nome varchar(100) NOT NULL, 
    administrador tinyint(1) DEFAULT NULL, 
    PRIMARY KEY (id), 
    UNIQUE (nome)
    )`;
    const res = await connection.execute(query);
    //console.log(res);
    return res;
}

module.exports = {
    createDB,
    createTables,
    createTableUsers
}