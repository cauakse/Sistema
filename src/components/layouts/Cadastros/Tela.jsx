import CadastroFornecedor from "./CadastroFornecedor"
import CadastroCategoria from "./CadastroCategoria"
import CadastroCliente from "./CadastroCliente"
import CadastroProduto from "./CadastroProduto"
import { Alert, Container } from "react-bootstrap";

export default function Tela(props) {
    return (
        <>
                    
                <Alert className={"text-center"} variant="primary">Tela de cadastro de {props.nome || "Titulo nao fornecido"}</Alert>
                <CadastroCategoria></CadastroCategoria>

        </>
    )
}