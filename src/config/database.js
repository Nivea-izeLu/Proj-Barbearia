import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Agendamentos'
};

export async function conectarBanco() {
    return await mysql.createConnection(dbConfig);
}
