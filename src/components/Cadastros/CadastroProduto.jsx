import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroProduto(props) {
    return (
        <>
            <div>
                <Form>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Nome do produto</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nome do produto"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Código</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Código"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
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
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Preço de Custo</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Preço"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Preço de Custo</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">+</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Preço"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" placeholder="URL" required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a url da imagem.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Válido até</Form.Label>
                            <Form.Control type="date" placeholder="" required />
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
                    <Button type="submit">Enviar</Button>
                </Form>
            </div>

        </>
    )
}