import { Container, Button,Table } from "react-bootstrap";

export default function TabelaCategorias(props) {
    return (
        <>
 <Container>
                <Button className="mb-3" variant="primary" onClick={()=>{
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeCategorias?.map((categoria) => {
                                return (
                                    <tr>
                                        <td>{categoria.nome}</td>
                                        <td>{categoria.descricao}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}