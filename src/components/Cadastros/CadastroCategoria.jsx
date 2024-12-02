import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { alterarCategoria,gravarCategoria } from '../../services/serviceCategoria';
import toast from 'react-hot-toast';

export default function CadastroCategoria(props) {
    const [categoria,setCategoria] = useState(()=>{
        if(props.modoEdicao){
            return {...props.categoriaSelecionada};
        }
        else
        {
            return{
               codigo:0,
               descricao:""
            }
        }

    });

    function manipularMudanca(evento){
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setCategoria({...categoria,[elemento]:valor})
    }

    const [formValidado,setFormValidado] = useState(false);
    function manipularSubmissao(evento){
        const form = evento.currentTarget;
        if(form.checkValidity()){
            //cadastrar o produto
            if(props.modoEdicao)
            {
                alterarCategoria(categoria).then((response)=>{
                    if(response.status){
                        let array = props.listaDeCategorias.filter((item) => {
                            return item.codigo !== categoria.codigo;
                        });
                        props.setListaDeCategorias(...array,categoria)
                        props.setExibirTabela(true);
                    }
                    else
                    {
                        toast.error("Erro ao alterar categoria");
                    }
                })
                props.setModoEdicao(false);
                props.setCategoriaSelecionada({});
            }
            else
            {
                gravarCategoria(categoria).then((response)=>{
                    if(response.status){
                        props.setExibirTabela(true);
                    }
                    else
                    {
                        toast.error("Erro ao cadastrar categoria");
                    }
                })
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
                            <Form.Label>Código</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                id="codigo"
                                value={categoria.codigo}
                                disabled={props.modoEdicao}
                                onChange={manipularMudanca}
                                name="codigo"
                                placeholder="codigo"
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
                                id="descricao"
                                value={categoria.descricao}
                                onChange={manipularMudanca}
                                name="descricao"
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
                    <Row>
                        <Col md={1}>
                         <Button type="submit">{props.modoEdicao?"Alterar":"Enviar"}</Button>
                        </Col>
                        <Col md={1}>
                        <Button type="" onClick={()=>{
                            props.setExibirTabela(true);
                            props.setCategoriaSelecionada({});
                            props.setModoEdicao(false);
                        }}>Voltar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

        </>
    )
}