import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function CadastroProduto(props) {
    const [usuario,setUsuario] = useState(()=>{
        if(props.modoEdicao){
            return {...props.usuarioSelecionado};
        }
        else
        {
            return{
                "nome":"",
                "email":"",
                "senha":"",
                "tipo":""
            }
        }

    });
    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setUsuario({...usuario,[elemento]:valor})
    }

    const [formValidado,setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            if(props.modoEdicao)
            {
                props.setModoEdicao(false);
                let array=props.listaDeUsuarios;
                array[array.findIndex(item => item.email === usuario.email)]=usuario;
                props.setListaDeUsuarios([...array])
                props.setUsuarioSelecionado({});
                props.setModoEdicao(false);
            }
            else
            {
                props.setListaDeUsuarios([...props.listaDeUsuarios, usuario]);
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
                            <Form.Label>Nome do usuarios</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome do usuarios"
                                value={usuario.nome}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                disabled={props.modoEdicao}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                defaultValue=""
                                value={usuario.email}
                                onChange={manipularMudanca}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Senha</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="password"
                                    placeholder="Senha"
                                    onChange={manipularMudanca}    
                                id="senha"
                                name="senha"
                                value={usuario.senha}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Tipo</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    placeholder="Tipo"
                                    
                                id="tipo"
                                name="tipo"
                                onChange={manipularMudanca}
                                value={usuario.tipo}
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
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
                            props.setUsuarioSelecionado({});
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