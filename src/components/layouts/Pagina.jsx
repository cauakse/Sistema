import Cabecalho from "./Cabecalho"
import Menu from "./Menu"

export default function Pagina (props){
    return(
        <>
            <Cabecalho titulo="Sistema de controle gerencial"></Cabecalho>
            <Menu></Menu>
            {
                props.children
            }
        </>
    )
}