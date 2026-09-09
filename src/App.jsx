import AgendamentoForm from "./componentes/AgendamentoForm";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Resposta from "./componentes/Resposta"

export default function App(){
  return(

    <div>
        <Header/>
        <AgendamentoForm/>
        <Resposta/>
        <Footer/>
    </div>
    
  )
}