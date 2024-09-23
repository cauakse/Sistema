import { Container, Button, Table } from "react-bootstrap";
import { entregadores } from "../../../dados/mockEntregadores";

export default function TabelaProdutos(props) {

    function excluirEntregador(entregador) {
        if (window.confirm("Deseja realmente excluir o entregador " + entregador.nome + "?")) {
            props.setListaDeEntregadores(props.listaDeEntregadores.filter((item) => {
                return item.id !== entregador.id;
            }));
        }
    }

    function alterarEntregador (entregador){
        props.setModoEdicao(true);
        props.setEntregadorSelecionado(entregador);
        props.setExibirTabela(false);
    }
    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={() => {
                    props.setExibirTabela(false);
                }}>Adicionar</Button>
                <Table striped bordered hover>
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CNH</th>
                        <th>Imagem CNH</th>
                        <th>Veiculo</th>
                        <th>Placa</th>
                        <th>Capacidade</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeEntregadores?.map((entregador) => {
                                return (
                                    <tr>
                                        <td>{entregador.id}</td>
                                        <td>{entregador.nome}</td>
                                        <td>{entregador.CNH}</td>
                                        <td><img src={entregador.imagemCNH} alt="Foto da CNH"></img></td>
                                        <td>{entregador.veiculo}</td>
                                        <td>{entregador.placa}</td>
                                        <td>{entregador.capacidade}</td>
                                        <td className="d-flex align-itens-center justify-content-center gap-3">
                                            <Button variant="warning" onClick={()=>{alterarEntregador(entregador)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg></Button>
                                            <Button variant="danger" onClick={()=>{excluirEntregador(entregador)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg> </Button>
                                        </td>
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