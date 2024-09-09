import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroCliente(props) {
    return (
        <>
            <div>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Primeiro Nome</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Primeiro Nome"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control
                                required
                                type="text"
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
                            <Form.Control type="text" placeholder="Cidade" required />
                            <Form.Control.Feedback type="invalid">
                                Informe uma cidade.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF" required />
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
                         <Button type="submit">Enviar</Button>
                        </Col>
                        <Col md={1}>
                        <Button type="" onClick={()=>{
                            props.setExibirTabela(true);
                        }}>Voltar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

        </>
    )
}