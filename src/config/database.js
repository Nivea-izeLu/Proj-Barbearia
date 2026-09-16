import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'aluno',
    database: 'Agendamentos',
    port: '3302'
};

export async function conectarBanco() {
    return await mysql.createConnection(dbConfig);
}
