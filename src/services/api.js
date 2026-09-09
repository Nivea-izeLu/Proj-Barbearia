const API_URL = 'http://localhost:3000';

export async function salvarAgendamento(dadosAgendamento) {

    const response = await fetch(`${API_URL}/salvar-agendamento`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosAgendamento),
    });


    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Erro ao realizar agendamento');
    }

    return response.json();
}