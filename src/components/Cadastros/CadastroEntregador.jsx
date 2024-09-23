import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function CadastroEntregador(props) {
    const [entregador,setEntregador] = useState(()=>{
        if(props.modoEdicao){
            return {...props.entregadorSelecionado};
        }
        else
        {
            return{
                "id":"",
                "nome":"",
                "CNH":"",
                "imagemCNH":"",
                "veiculo":"",
                "placa":"",
                "capacidade":""
            }
        }

    });
    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setEntregador({...entregador,[elemento]:valor})
    }

    const [formValidado,setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            if(props.modoEdicao)
            {
                props.setModoEdicao(false);
                let array=props.listaDeEntregadores;
                array[array.findIndex(item => item.id === entregador.id)]=entregador;
                props.setListaDeEntregadores([...array])
                props.setEntregadorSelecionado({});
                props.setModoEdicao(false);
            }
            else
            {
                props.setListaDeEntregadores([...props.listaDeEntregadores, entregador]);
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
                            <Form.Label>Nome do Entregador</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome do entregador"
                                value={entregador.nome}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                required
                                disabled={props.modoEdicao}
                                type="text"
                                id="id"
                                name="id"
                                placeholder="Identificador"
                                defaultValue=""
                                value={entregador.id}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Numero da CNH</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="CNH"
                                    onChange={manipularMudanca}    
                                id="CNH"
                                name="CNH"
                                value={entregador.CNH}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Imagem da CNH</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Imagem CNH"
                                    
                                id="imagemCNH"
                                name="imagemCNH"
                                onChange={manipularMudanca}
                                value={entregador.imagemCNH}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                            <Form.Label>Veiculo</Form.Label>
                            <Form.Control 
                            type="text" 
                            value={entregador.veiculo}
                            id="veiculo"
                            name="veiculo"
                            onChange={manipularMudanca}
                            placeholder="veiculo" 
                            required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe o veiculo.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Placa do Veiculo</Form.Label>
                            <Form.Control 
                            type="text"
                            value={entregador.placa}
                            id="placa"
                            name="placa"
                            onChange={manipularMudanca}
                             placeholder="" 
                             required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a placa.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>Capacidade</Form.Label>
                            <Form.Control 
                            type="text"
                            value={entregador.capacidade}
                            id="capacidade"
                            name="capacidade"
                            onChange={manipularMudanca}
                             placeholder="" 
                             required />
                            <Form.Control.Feedback type="invalid">
                                Por favor informe a placa.
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
                            props.setEntregadorSelecionado({});
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