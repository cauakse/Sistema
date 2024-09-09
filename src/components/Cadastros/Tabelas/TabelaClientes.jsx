import {Container,Button} from "react-bootstrap"
export default function TabelaClientes(props){
    return(
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
            </Container>
        </>
    )
}