import {Container,Button,Table} from "react-bootstrap"
export default function TabelaClientes(props){
    return(
        <>
 <Container>
                <Button className="mb-3" variant="primary" onClick={()=>{
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>CPF</th>
                        <th>Cidade</th>
                        <th>Email</th>
                        
                    </thead>
                    <tbody>
                        {
                            props.listaDeClientes?.map((cliente) => {
                                return (
                                    <tr>
                                        <td>{cliente.primeiroNome}</td>
                                        <td>{cliente.sobrenome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.cidade}</td>
                                        <td>{cliente.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}