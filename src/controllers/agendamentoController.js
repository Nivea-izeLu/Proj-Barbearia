import {
    criarAgendamento,
    listarAgendamentos
} from '../models/agendamentoModel.js';

export async function salvarAgendamento(req, res) {
    const {
        nome,
        procedimento,
        dia,
        hora
    } = req.body;

    if (!nome || !procedimento || !dia || !hora) {
        return res.status(400).json({
            message: 'Todos os campos são obrigatórios.'
        });
    }

    try {
        const id = await criarAgendamento(
            nome,
            procedimento,
            dia,
            hora
        );

        const mensagem = `
Olá ${nome}!

Aguardamos você para realizar o procedimento
${procedimento} no dia ${dia} às ${hora} horas.
        `.trim();

        return res.status(201).json({
            id,
            message: mensagem
        });

    } catch (error) {
        console.error(
            'Erro ao salvar agendamento:',
            error
        );

        return res.status(500).json({
            message: 'Erro interno ao salvar o agendamento.'
        });
    }
}

export async function buscarAgendamentos(req, res) {
    try {
        const agendamentos =
            await listarAgendamentos();

        return res.status(200).json(
            agendamentos
        );

    } catch (error) {
        console.error(
            'Erro ao listar agendamentos:',
            error
        );

        return res.status(500).json({
            message: 'Erro interno ao buscar os agendamentos.'
        });
    }
}
