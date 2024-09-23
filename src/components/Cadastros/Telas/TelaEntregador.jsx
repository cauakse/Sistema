import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroEntregador from "../CadastroEntregador.jsx";
import TabelaEntregador from "../Tabelas/TabelaEntregador.jsx";
import {entregadores} from "../../../dados/mockEntregadores.js"
export default function TelaProduto(props) {
    
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeEntregadores,setListaDeEntregadores] = useState(entregadores);
    const [modoEdicao,setModoEdicao] = useState(false);
    const [entregadorSelecionado,setEntregadorSelecionado] = useState({});

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Entregadores</Alert>
                    {
                        exibirTabela ? 
                        <TabelaEntregador 
                        setExibirTabela={setExibirTabela} 
                        listaDeEntregadores={listaDeEntregadores}
                        setListaDeEntregadores={setListaDeEntregadores}
                        setModoEdicao={setModoEdicao}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        ></TabelaEntregador>:

                        <CadastroEntregador 
                        setExibirTabela={setExibirTabela} 
                        listaDeEntregadores={listaDeEntregadores}
                        setListaDeEntregadores={setListaDeEntregadores}
                        setModoEdicao={setModoEdicao}
                        modoEdicao={modoEdicao}
                        entregadorSelecionado={entregadorSelecionado}
                        setEntregadorSelecionado={setEntregadorSelecionado}
                        ></CadastroEntregador>
                    }
                    
                </Pagina>
            </>
        )
}