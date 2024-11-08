import { useEffect, useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroCategoria from "../CadastroCategoria";
import TabelaCategorias from "../Tabelas/TabelaCategorias";
//import {categorias} from "../../../dados/mockCategorias";
import { consultarAllCategoria } from "../../../services/serviceCategoria";
export default function TelaCategoria(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeCategorias,setListaDeCategorias] = useState([]);
    const [modoEdicao,setModoEdicao] = useState(false);
    const [categoriaSelecionada,setCategoriaSelecionada] = useState({});

        useEffect(()=>{
            consultarAllCategoria().then((lista)=>{
                setListaDeCategorias(lista);       
            })
        },[exibirTabela])

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Categoria</Alert>
                    {
                        exibirTabela ? 
                        <TabelaCategorias 
                        setExibirTabela={setExibirTabela}
                        listaDeCategorias={listaDeCategorias}
                        setListaDeCategorias={setListaDeCategorias}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        ></TabelaCategorias>:

                        <CadastroCategoria 
                        setExibirTabela={setExibirTabela}
                        listaDeCategorias={listaDeCategorias}
                        setListaDeCategorias={setListaDeCategorias}
                        modoEdicao={modoEdicao}
                        setModoEdicao={setModoEdicao}
                        categoriaSelecionada={categoriaSelecionada}
                        setCategoriaSelecionada={setCategoriaSelecionada}
                        ></CadastroCategoria>
                    }
                    
                </Pagina>
            </>
        )
}