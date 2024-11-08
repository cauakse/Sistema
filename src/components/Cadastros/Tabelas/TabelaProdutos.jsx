import { Container, Button, Table } from "react-bootstrap";
import {excluirProduto as exprod} from "../../../services/serviceProduto.js"
export default function TabelaProdutos(props) {

    function excluirProduto(produto) {
        if (window.confirm("Deseja realmente excluir o produto " + produto.descricao + "?")) {
            exprod(produto).then((resposta)=>{
                if(resposta.status){
                    props.setListaDeProdutos(props.listaDeProdutos.filter((item) => {
                        return item.codigo !== produto.codigo;
                    }));
                }
                else
                {
                    console.log(resposta);
                }
            })
        }
    }

    function alterarProduto (produto){
        props.setModoEdicao(true);
        props.setProdutoSelecionado(produto);
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
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço Custo</th>
                        <th>Preço venda</th>
                        <th>Imagem</th>
                        <th>Validade</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeProdutos?.map((produto) => {
                                return (
                                    <tr>
                                        <td>{produto.codigo}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.precoCusto}</td>
                                        <td>{produto.precoVenda}</td>
                                        <td><img src={produto.urlImagem} alt="Foto do produto"></img></td>
                                        <td>{produto.dataValidade}</td>
                                        <td className="d-flex align-itens-center justify-content-center gap-3">
                                            <Button variant="warning" onClick={()=>{alterarProduto(produto)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg></Button>
                                            <Button variant="danger" onClick={()=>{excluirProduto(produto)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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