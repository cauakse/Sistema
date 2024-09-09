import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroCliente from "../CadastroCliente";
import TabelaClientes from "../Tabelas/TabelaClientes";
import {clientes} from "../../../dados/mockClientes"
export default function TelaCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Cliente</Alert>
                    {
                        exibirTabela ? 
                        <TabelaClientes setExibirTabela={setExibirTabela} listaDeClientes={clientes}></TabelaClientes>:
                        <CadastroCliente setExibirTabela={setExibirTabela}></CadastroCliente>
                    }
                    
                </Pagina>
            </>
        )
}