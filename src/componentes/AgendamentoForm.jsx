import { useState } from "react"; 
import { salvarAgendamento } from "../services/api"; 
import e from "cors";

export default function AgendamentoForm ({ setMensagem})  { 
    const [nome, setNome] = useState(""); 
    const [procedimento, setProcedimento] = useState(""); 
    const [dia, setDia] = useState (""); 
    const [hora, setHora] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMensagem("aguarde, processando seu agendamento...");

        const dadosAgendamento = {
            nome,
            procedimento,
            dia,
            hora

        };

        try {
            const result = await salvarAgendamento (dadosAgendamento);

            setMensagem(result.message);

        } catch (error) {
            console.error("erro na requisição:", error);
            setMensagem(error.message); 
        };

        }

    return (
        <form id="agendamento-form" onSubmit={handleSubmit}>
            <h1>Barbearia JS</h1>

            <p>
                Informe o nome:

                <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
            </p>

             <p>
                Informe o procedimento:

                <input 
                type="text"
                value={procedimento}
                onChange={(e) => setProcedimento(e.target.value)}
                />
            </p>

             <p>
                Data do agendamento:

                <input 
                type="date"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                />
            </p>

             <p>
                Hora do agendamento:

                <input 
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                />
            </p>

            <input type="submit" value="CONFIRMAR" />
        </form>
    );
}
