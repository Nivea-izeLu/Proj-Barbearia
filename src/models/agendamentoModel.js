import { conectarBanco } from '../config/database.js';

export async function criarAgendamento(
    nome,
    procedimento,
    dia,
    hora
) {
    const connection = await conectarBanco();

    try {
        const sql = `
            INSERT INTO agendamento
            (nome, procedimento, dia, hora)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await connection.execute(sql, [
            nome,
            procedimento,
            dia,
            hora
        ]);

        return result.insertId;

    } finally {
        await connection.end();
    }
}

export async function listarAgendamentos() {
    const connection = await conectarBanco();

    try {
        const sql = `
            SELECT *
            FROM agendamento
            ORDER BY dia, hora
        `;

        const [rows] = await connection.execute(sql);

        return rows;

    } finally {
        await connection.end();
    }
}