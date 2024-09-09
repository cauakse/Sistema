import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroFornecedor from "../CadastroFornecedor";
import TabelaFornecedores from "../Tabelas/TabelaFornecedores";
import {fornecedores} from "../../../dados/mockFornecedores"
export default function TelaCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Fornecedor</Alert>
                    {
                        exibirTabela ? 
                        <TabelaFornecedores setExibirTabela={setExibirTabela} listaDeFornecedores={fornecedores}></TabelaFornecedores>:
                        <CadastroFornecedor setExibirTabela={setExibirTabela}></CadastroFornecedor>
                    }
                    
                </Pagina>
            </>
        )
}