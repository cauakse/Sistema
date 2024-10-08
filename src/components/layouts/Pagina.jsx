import { Container } from "react-bootstrap"
import Cabecalho from "./Cabecalho"
import Menu from "./Menu"

export default function Pagina(props) {
    return (
        <>
            <Container className="mb-3">
                <Cabecalho titulo="Sistema de controle gerencial"></Cabecalho>
                <Menu></Menu>
                {
                    props.children
                }
            </Container>

        </>
    )
}