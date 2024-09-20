import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroCliente from "../CadastroCliente";
import TabelaClientes from "../Tabelas/TabelaClientes";
import {clientes} from "../../../dados/mockClientes"
export default function TelaCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeClientes,setListaDeClientes] = useState(clientes);
    const [modoEdicao,setModoEdicao] = useState(false);
    const [clienteSelecionado,setClienteSelecionado] = useState({});
        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Cliente</Alert>
                    {
                        exibirTabela ? 
                        <TabelaClientes 
                        setExibirTabela={setExibirTabela}
                        listaDeClientes={listaDeClientes}
                        setListaDeClientes={setListaDeClientes}
                        setModoEdicao={setModoEdicao}
                        setClienteSelecionado={setClienteSelecionado}
                        ></TabelaClientes>:

                        <CadastroCliente 
                        setExibirTabela={setExibirTabela}
                        listaDeClientes={listaDeClientes}
                        setListaDeClientes={setListaDeClientes}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        clienteSelecionado={clienteSelecionado}
                        setClienteSelecionado={setClienteSelecionado}
                        ></CadastroCliente>
                    }
                    
                </Pagina>
            </>
        )
}