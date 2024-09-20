import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroFornecedor from "../CadastroFornecedor";
import TabelaFornecedores from "../Tabelas/TabelaFornecedores";
import {fornecedores} from "../../../dados/mockFornecedores"
export default function TelaCliente(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeFornecedores,setListaDeFornecedores] = useState(fornecedores);
    const [modoEdicao,setModoEdicao] = useState(false);
    const [fornecedorSelecionado,setFornecedorSelecionado] = useState({});
        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Fornecedor</Alert>
                    {
                        exibirTabela ? 
                        <TabelaFornecedores 
                        setExibirTabela={setExibirTabela} 
                        listaDeFornecedores={listaDeFornecedores}
                        setListaDeFornecedores={setListaDeFornecedores}
                        setModoEdicao={setModoEdicao}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        ></TabelaFornecedores>:

                        <CadastroFornecedor 
                        setExibirTabela={setExibirTabela}
                        listaDeFornecedores={listaDeFornecedores}
                        setListaDeFornecedores={setListaDeFornecedores}
                        setModoEdicao={setModoEdicao}
                        setFornecedorSelecionado={setFornecedorSelecionado}
                        modoEdicao={modoEdicao}
                        fornecedorSelecionado={fornecedorSelecionado}
                        ></CadastroFornecedor>
                    }
                    
                </Pagina>
            </>
        )
}