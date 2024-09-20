import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function CadastroProduto(props) {
    const [produto,setProduto] = useState(()=>{
        if(props.modoEdicao){
            return {...props.produtoSelecionado};
        }
        else
        {
            return{
                codigo:0,
                descricao:"",
                precoCusto:0.0,
                precoVenda:0.0,
                urlImagem:"",
                dataValidade:""
            }
        }

    });
    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setProduto({...produto,[elemento]:valor})
    }

    const [formValidado,setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            if(props.modoEdicao)
            {
                props.setModoEdicao(false);
                let array=props.listaDeProdutos;
                array[array.findIndex(item => item.codigo === produto.codigo)]=produto;
                props.setListaDeProdutos([...array])
                props.setProdutoSelecionado({});
                props.setModoEdicao(false);
            }
            else
            {
                props.setListaDeProdutos([...props.listaDeProdutos, produto]);
            }

            props.setExibirTabela(true);
        }
        else
        {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();
    }

    return (
        <>
            <div>
                <Form  noValidate validated={formValidado} onSubmit={manipularSubmissao}>
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
                                type="text"
                                id="codigo"
                                name="codigo"
                                placeholder="Código"
                                defaultValue=""
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
                                    type="text"
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
                                    type="text"
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
                            required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a url da imagem.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Válido até</Form.Label>
                            <Form.Control 
                            type="date"
                            value={produto.dataValidade}
                            id="dataValidade"
                            name="dataValidade"
                            onChange={manipularMudanca}
                             placeholder="" 
                             required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a data.
                            </Form.Control.Feedback>
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
                         <Button type="submit">{props.modoEdicao? "Alterar" : "Enviar"}</Button>
                        </Col>
                        <Col md={1}>
                        <Button type="" onClick={()=>{
                            props.setProdutoSelecionado({});
                            props.setModoEdicao(false);
                            props.setExibirTabela(true);
                        }}>Voltar</Button>
                        </Col>
                    </Row>
                    
                </Form>
            </div>

        </>
    )
}