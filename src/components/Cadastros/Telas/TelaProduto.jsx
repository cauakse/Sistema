import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroProduto from "../CadastroProduto";
import TabelaProdutos from "../Tabelas/TabelaProdutos";
import {produtos} from "../../../dados/mockProdutos.js"
export default function TelaProduto(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Produto</Alert>
                    {
                        exibirTabela ? 
                        <TabelaProdutos setExibirTabela={setExibirTabela} listaDeProdutos={produtos}></TabelaProdutos>:
                        <CadastroProduto setExibirTabela={setExibirTabela}></CadastroProduto>
                    }
                    
                </Pagina>
            </>
        )
}