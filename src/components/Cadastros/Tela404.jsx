import Pagina from "../layouts/Pagina";
import imagem404 from "../../assets/imgs/imagem404.webp"
import { Container } from "react-bootstrap";
export default function Tela404(props){
    return (
        <Pagina>
            <Container className="d-flex align-items-center justify-content-center">
            <img src={imagem404} alt="ERRO 404"></img>
            </Container>
        </Pagina>
    )
}