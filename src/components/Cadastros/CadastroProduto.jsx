import Button from 'react-bootstrap/Button';
import { Spinner, Alert } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { consultarAllCategoria } from '../../services/serviceCategoria.js';
import toast, {Toaster} from 'react-hot-toast';
import { alterarProduto, gravarProduto} from '../../services/serviceProduto.js';
import { useDispatch, useSelector } from 'react-redux';
import ESTADO from '../../redux/estados.js';
import { incluirProduto } from '../../redux/produtoReducer.js';

export default function CadastroProduto(props) {
    const [temCategorias, setTemCategorias] = useState(false);
    const [produto, setProduto] = useState(() => {

        if (props.modoEdicao) {
            return { ...props.produtoSelecionado };
            
        } else {
            return {
                codigo: 0,
                descricao: "",
                precoCusto: 0.0,
                precoVenda: 0.0,
                qtdEstoque: 0,
                urlImagem: "",
                dataValidade: "",
                categoria: {}
            };
        }
    });
    const {estado ,mensagem,listaDeProdutos} = useSelector((state)=>state.produto);
    const despachante = useDispatch();

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        consultarAllCategoria().then((result) => {
            if (Array.isArray(result)) {
                setCategorias(result);
                setTemCategorias(true);
            }

        }).catch((e) => {
            setTemCategorias(false);
            toast.error("Nao foi possivel carregar as categorias");
        });
    }, []);

    function selecionarCategoria (evento){
        setProduto({...produto,
            categoria:{
                codigo:evento.currentTarget.value
            }})
    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({ ...produto, [elemento]: valor });
    }

    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            // cadastrar o produto
            if (props.modoEdicao) {
                
                alterarProduto(produto).then((resultado)=>{
                    if(resultado.status){
                        let array = props.listaDeProdutos.filter((item) => {
                            return item.codigo !== produto.codigo;
                        });
                        props.setListaDeProdutos(...array,produto)
                        props.setExibirTabela(true);
                    }
                    else
                    {
                        toast.error(resultado);
                    }
                })
                
                props.setProdutoSelecionado({});
                props.setModoEdicao(false);
            } else {
                despachante(incluirProduto(produto))
                toast.success(mensagem);
                props.setExibirTabela(true);
            }

            
        } else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    if(estado === ESTADO.PENDENTE){
        return (
            <>
                <Alert variant="primary">{mensagem}</Alert>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
        )
    }else if (estado === ESTADO.ERRO) {
        return (
            <>
                <Alert variant="danger">{mensagem}</Alert>
            </>
        )
    }
    else if(estado === ESTADO.OCIOSO){

        return (
            <div>
                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Nome do produto</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="descricao"
                                name="descricao"
                                placeholder="Nome do produto"
                                value={produto.descricao}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Código</Form.Label>
                            <Form.Control
                                required
                                disabled={props.modoEdicao}
                                type="number"
                                id="codigo"
                                name="codigo"
                                placeholder="Código"
                                value={produto.codigo}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Preço de Custo</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    placeholder="Preço"
                                    onChange={manipularMudanca}
                                    id="precoCusto"
                                    name="precoCusto"
                                    value={produto.precoCusto}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Preço de Venda</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    placeholder="Preço"
                                    id="precoVenda"
                                    name="precoVenda"
                                    onChange={manipularMudanca}
                                    value={produto.precoVenda}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Quantidade Estoque</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    placeholder="Estoque"
                                    id="qtdEstoque"
                                    name="qtdEstoque"
                                    onChange={manipularMudanca}
                                    value={produto.qtdEstoque}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom05">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={produto.urlImagem}
                                id="urlImagem"
                                name="urlImagem"
                                onChange={manipularMudanca}
                                placeholder="URL"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a url da imagem.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Válido até</Form.Label>
                            <Form.Control
                                type="date"
                                value={produto.dataValidade}
                                id="dataValidade"
                                name="dataValidade"
                                onChange={manipularMudanca}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a data.
                            </Form.Control.Feedback>
                        </Form.Group>
    
                        <Form.Group as={Col} md={7}>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select id="categoria" name="categoria" onChange={selecionarCategoria}>
                                {categorias.map((categoria) => (
                                    <option key={categoria.codigo} value={categoria.codigo}>
                                        {categoria.descricao}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
    
                        <Form.Group as={Col}>
                            {
                                !temCategorias ? <Spinner className="mt-4" animation="border" role="status" variant='success'>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner> : ""
                            }
                        </Form.Group>
                    </Row>
    
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Eu concordo com os termos de serviço"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Row>
                        <Col md={1}>
                            <Button 
                            disabled={!temCategorias} 
                            type="submit">{props.modoEdicao ? "Alterar" : "Enviar"}
                            </Button>
                        </Col>
                        <Col md={1}>
                            <Button
                                type="button"
                                onClick={() => {
                                    props.setProdutoSelecionado({});
                                    props.setModoEdicao(false);
                                    props.setExibirTabela(true);
                                }}
                            >
                                Voltar
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {!temCategorias ? <Toaster position='top-right'></Toaster> : ""}
            </div>
        );
    } 
}
