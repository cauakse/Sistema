import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroProduto from "../CadastroProduto";
import TabelaProdutos from "../Tabelas/TabelaProdutos";
import {produtos} from "../../../dados/mockProdutos.js"
export default function TelaProduto(props) {
    
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos,setListaDeProdutos] = useState(produtos);
    const [modoEdicao,setModoEdicao] = useState(false);
    const [produtoSelecionado,setProdutoSelecionado] = useState({});

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Produto</Alert>
                    {
                        exibirTabela ? 
                        <TabelaProdutos 
                        setExibirTabela={setExibirTabela} 
                        listaDeProdutos={listaDeProdutos}
                        setListaDeProdutos={setListaDeProdutos}
                        setModoEdicao={setModoEdicao}
                        setProdutoSelecionado={setProdutoSelecionado}
                        ></TabelaProdutos>:

                        <CadastroProduto 
                        setExibirTabela={setExibirTabela} 
                        listaDeProdutos={listaDeProdutos}
                        setListaDeProdutos={setListaDeProdutos}
                        setModoEdicao={setModoEdicao}
                        modoEdicao={modoEdicao}
                        produtoSelecionado={produtoSelecionado}
                        setProdutoSelecionado={setProdutoSelecionado}
                        ></CadastroProduto>
                    }
                    
                </Pagina>
            </>
        )
}