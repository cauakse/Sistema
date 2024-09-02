import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function CadastroCategoria(props) {
    return (
        <>
            <div>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nome da Categoria</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Categoria"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="12" controlId="validationCustom02">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Descrição"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>



                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Eu concordo com os termos"
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