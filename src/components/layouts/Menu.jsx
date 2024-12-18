import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { contextoUsuario } from "../../App.js";

export default function Menu(props) {
    const {usuario,setUsuario}=useContext(contextoUsuario)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary mt-2 mb-3">
                <Container>
                    <Navbar.Brand href="#" as={Link} to="/">Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" as={Link} to="/cliente">Cliente</NavDropdown.Item>
                                <NavDropdown.Item href="#" as={Link} to="/fornecedor">Fornecedor</NavDropdown.Item>
                                <NavDropdown.Item href="#" as={Link} to="/produto">Produto</NavDropdown.Item>
                                <NavDropdown.Item href="#" as={Link} to="/categoria">Categoria</NavDropdown.Item>
                                <NavDropdown.Item href="#" as={Link} to="/usuario">Usuario</NavDropdown.Item>
                                <NavDropdown.Item href="#" as={Link} to="/entregador">Entregador</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Operações" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Venda</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Fornecedores</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Estoque</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Vendas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Compras</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='#home'>Sobre</Nav.Link>
                            <Nav.Link  onClick={()=>{
                            setUsuario({
                                "usuario":"",
                                "logado":false
                            })
                        }}>Sair</Nav.Link>
                        <Nav.Link>Usuario logado: {usuario.usuario}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}