import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroFornecedor(props) {
    return (
        <>
            <div>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nome da Empresa</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nome da Empresa"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>CNPJ</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Last name"
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
                            <Form.Control type="text" placeholder="Cidade" required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe uma cidade válida.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" placeholder="Estado" required />
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