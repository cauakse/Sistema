import { useState } from "react";
import Pagina from "../../layouts/Pagina"
import { Alert } from "react-bootstrap";
import CadastroUsuario from "../CadastroUsuario.jsx";
import TabelaUsuario from "../Tabelas/TabelaUsuario.jsx";
import {usuarios} from "../../../dados/mockUsuarios.js"
export default function TelaProduto(props) {
    
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeUsuarios,setListaDeUsuarios] = useState(usuarios);
    const [modoEdicao,setModoEdicao] = useState(false);
    const [usuarioSelecionado,setUsuarioSelecionado] = useState({});

        return (
            <>
                <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de Usuario</Alert>
                    {
                        exibirTabela ? 
                        <TabelaUsuario 
                        setExibirTabela={setExibirTabela} 
                        listaDeUsuarios={listaDeUsuarios}
                        setListaDeUsuarios={setListaDeUsuarios}
                        setModoEdicao={setModoEdicao}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        ></TabelaUsuario>:

                        <CadastroUsuario 
                        setExibirTabela={setExibirTabela} 
                        listaDeUsuarios={listaDeUsuarios}
                        setListaDeUsuarios={setListaDeUsuarios}
                        setModoEdicao={setModoEdicao}
                        modoEdicao={modoEdicao}
                        usuarioSelecionado={usuarioSelecionado}
                        setUsuarioSelecionado={setUsuarioSelecionado}
                        ></CadastroUsuario>
                    }
                    
                </Pagina>
            </>
        )
}