import {Container,Button,Table} from "react-bootstrap"

export default function TabelaFornecedores(props){
    return(
        <>
<Container>
                <Button className="mb-3" variant="primary" onClick={()=>{
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Email</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeFornecedores?.map((fornecedor) => {
                                return (
                                    <tr>
                                        <td>{fornecedor.nome}</td>
                                        <td>{fornecedor.cnpj}</td>
                                        <td>{fornecedor.email}</td>
                                        <td>{fornecedor.cidade}</td>
                                        <td>{fornecedor.estado}</td>
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