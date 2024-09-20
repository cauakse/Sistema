import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
export default function CadastroCliente(props) {
    const [cliente, setCliente] = useState(() => {
        if (props.modoEdicao) {
            return { ...props.clienteSelecionado };
        }
        else {
            return {
                primeiroNome: "",
                sobrenome: "",
                cpf: "",
                cidade: "",
                email:""
            }
        }
    });

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setCliente({ ...cliente, [elemento]: valor })
    }

    const [formValidado,setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            if(props.modoEdicao)
            {
                props.setModoEdicao(false);
                let array=props.listaDeClientes;
                array[array.findIndex(item => item.cpf === cliente.cpf)]=cliente;
                props.setListaDeClientes([...array])
                props.setClienteSelecionado({});
                props.setModoEdicao(false);
            }
            else
            {
                props.setListaDeClientes([...props.listaDeClientes, cliente]);
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
                    <Row className="mb-3" >
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Primeiro Nome</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="primeiroNome"
                                id="primeiroNome"
                                value={cliente.primeiroNome}
                                onChange={manipularMudanca}
                                placeholder="Primeiro Nome"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="sobrenome"
                                id="sobrenome"
                                value={cliente.sobrenome}
                                onChange={manipularMudanca}
                                placeholder="Sobrenome"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Email</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                    value={cliente.email}
                                    onChange={manipularMudanca}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor informe um email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text"
                             placeholder="Cidade" 
                             required
                             name="cidade"
                             id="cidade"
                             value={cliente.cidade}
                             onChange={manipularMudanca}
                              />
                            <Form.Control.Feedback type="invalid">
                                Informe uma cidade.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control 
                            type="text"
                             placeholder="CPF" 
                             required 
                             disabled={props.modoEdicao}
                             name="cpf"
                             id="cpf"
                             value={cliente.cpf}
                             onChange={manipularMudanca}
                             />
                            <Form.Control.Feedback type="invalid">
                                Informe um CPF válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Eu concordo com os termos de uso e serviço."
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Row>
                        <Col md={1}>
                         <Button type="submit">{props.modoEdicao?"Alterar":"Enviar"}</Button>
                        </Col>
                        <Col md={1}>
                        <Button type="" onClick={()=>{
                            props.setClienteSelecionado({});
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