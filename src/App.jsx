import { useState } from "react";

import AgendamentoForm from "./componentes/AgendamentoForm";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Resposta from "./componentes/Resposta";

export default function App() {
    const [mensagem, setMensagem] = useState("");

    return (
        <div>
            <Header />

            <AgendamentoForm setMensagem={setMensagem} />

            <Resposta mensagem={mensagem} />

            <Footer />
        </div>
    );
}
