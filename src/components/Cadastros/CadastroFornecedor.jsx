import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function CadastroFornecedor(props) {
    const [fornecedor, setFornecedor] = useState(() => {
        if (props.modoEdicao) {
            return { ...props.fornecedorSelecionado };
        }
        else {
            return {
                nome: "",
                cnpj: "",
                email: "",
                cidade: "",
                estado:""
            }
        }
    });

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setFornecedor({ ...fornecedor, [elemento]: valor })
    }

    const [formValidado,setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            if(props.modoEdicao)
            {
                props.setModoEdicao(false);
                let array=props.listaDeFornecedores;
                array[array.findIndex(item => item.nome === fornecedor.nome)]=fornecedor;
                props.setListaDeFornecedores([...array])
                props.setFornecedorSelecionado({});
                props.setModoEdicao(false);
            }
            else
            {
                props.setListaDeFornecedores([...props.listaDeFornecedores, fornecedor]);
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
                <Form validated={formValidado} onSubmit={manipularSubmissao}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nome da Empresa</Form.Label>
                            <Form.Control
                                required
                                disabled={props.modoEdicao}
                                type="text"
                                placeholder="Nome da Empresa"
                                defaultValue=""
                                name="nome"
                                id="nome"
                                value={fornecedor.nome}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Last name"
                                name="cnpj"
                                id="cnpj"
                                value={fornecedor.cnpj}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Email de Contato</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    name="email"
                                    id="email"
                                    value={fornecedor.email}
                                    onChange={manipularMudanca}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor informe um email válido.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Cidade"
                                required
                                name="cidade"
                                id="cidade"
                                value={fornecedor.cidade}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe uma cidade válida.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Estado"
                                required
                                name="estado"
                                id="estado"
                                value={fornecedor.estado}
                                onChange={manipularMudanca} />
                            <Form.Control.Feedback type="invalid">
                                Informe um estado válido.
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Row>
                        <Col md={1}>
                            <Button type="submit">{props.modoEdicao?"Alterar":"Enviar"}</Button>
                        </Col>
                        <Col md={1}>
                            <Button type="" onClick={() => {
                                props.setFornecedorSelecionado({});
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