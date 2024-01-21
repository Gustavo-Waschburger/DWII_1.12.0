import "./App.css";
import { useEffect } from "react";
import Botao from "./botao/botao.jsx";
import Titulo from "./titulo/titulo.jsx";
import Mensagem from "./mensagens/msg.jsx";
//import axios from "axios";

function App() {
  const [msgem, setmsgem] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(true);

  async function requisicao() {
    try {
      // eslint-disable-next-line no-undef
      const resultado = await axios.get("http://localhost:8080");
      setmsgem(resultado.data);
      setCarregando(false);
      setErro(false);
    } catch {}
  }

  useEffect(() => {
    requisicao();
  }, []);

  return (
    <>
      <div className="chat">
        <div className="header">
          <div className="titulo">
            <Botao></Botao>
            <Titulo></Titulo>
          </div>
        </div>
        <ul>
          <Mensagem
            mensagem={msgem.mensagem}
            visualizado={msgem.visualizado}
            remetente={msgem.remetentes}
          ></Mensagem>
          <Mensagem
            mensagem={msgem.mensagem}
            visualizado={msgem.visualizado}
            remetente={msgem.remetentes}
          ></Mensagem>
          <Mensagem
            mensagem={msgem.mensagem}
            visualizado={msgem.visualizado}
            remetente={msgem.remetentes}
          ></Mensagem>
        </ul>
      </div>
    </>
  );
}

export default App;
