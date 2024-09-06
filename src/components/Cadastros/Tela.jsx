import Pagina from "../layouts/Pagina"
import { Alert } from "react-bootstrap";

export default function Tela(props) {
    return (
        <>
               <Pagina>
                    <Alert className={"text-center"} variant="primary">Tela de cadastro de {props.nome || "Titulo nao fornecido"}</Alert>
                    {props.children}
                </Pagina> 
        </>
    )
}