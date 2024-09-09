import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroCategoria from "../CadastroCategoria";
import TabelaCategorias from "../Tabelas/TabelaCategorias";
import {categorias} from "../../../dados/mockCategorias";

export default function TelaCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Categoria</Alert>
                    {
                        exibirTabela ? 
                        <TabelaCategorias setExibirTabela={setExibirTabela} listaDeCategorias={categorias}></TabelaCategorias>:
                        <CadastroCategoria setExibirTabela={setExibirTabela}></CadastroCategoria>
                    }
                    
                </Pagina>
            </>
        )
}