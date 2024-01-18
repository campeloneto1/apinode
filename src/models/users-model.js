const connection = require("./connetion");
require("dotenv").config();
const PREFIX = process.env.MYSQL_TB_PREFIX;
const table = `${PREFIX}_users`;

const index = async () => {
    const query = `SELECT * FROM ${table}`;
    const [res] = await connection.execute(query);
    return res;
}

const find = async (id) => {
    const query = `SELECT * FROM ${table} WHERE id = ?`;
    const [res] = await connection.execute(query, [id]);
    return res;
}

const insert = async (data) => {
    const {nome, cpf} = data;
    const query = `INSERT INTO ${table} (nome, cpf) VALUES (?, ?)`;
    const [res] = await connection.execute(query, [nome, cpf]);
    return res;
}

const update = async (id, data) => {
    const {nome, cpf} = data;
    const query = `UPDATE ${table} SET nome = ?, cpf = ? WHERE id = ?`;
    const [res] = await connection.execute(query, [nome, cpf, id]);
    return res;
}

const remove = async (id) => {
    const query = `DELETE FROM ${table} WHERE id = ?`;
    const [res] = await connection.execute(query, [id]);
    return res;
}

module.exports = {
    index,
    find,
    insert,
    update,
    remove
}