import { Container, Form, Button } from "react-bootstrap";
import { useContext, useRef } from "react";
import { contextoUsuario } from "../../../App";
export default function TelaLogin() {
    const nomeUsuario = useRef();
    const senhaUsuario = useRef();
    const setUsuario = useContext(contextoUsuario);
    function manipularSubmissao(evento){
        evento.preventDefault();
        evento.stopPropagation();
        const usuarioDigitado = nomeUsuario.current.value;
        const senhaDigitada = senhaUsuario.current.value;
        if(usuarioDigitado==='admin' && senhaDigitada === "admin"){
            setUsuario({
                "usuario":usuarioDigitado,
                "logado":true
            })
        }
    }
    
    
    return (
        <Container className="w-25 border p-2">
            <Form onSubmit={manipularSubmissao}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control id="nome" name="nome" type="text" placeholder="Usuário" ref={nomeUsuario}/>
                    <Form.Text className="text-muted">
                        Nunca compartilhe suas informações pessoais com ninguem!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control id="senha" name="senha" type="password" placeholder="Senha" ref={senhaUsuario}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
}