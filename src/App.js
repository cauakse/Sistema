import Tela404 from "./components/Cadastros/Telas/Tela404";
import TelaMenu from "./components/Cadastros/Telas/TelaMenu"
import TelaProduto from "./components/Cadastros/Telas/TelaProduto"
import TelaCategoria from "./components/Cadastros/Telas/TelaCategoria"
import TelaFornecedor from "./components/Cadastros/Telas/TelaFornecedor"
import TelaUsuario from "./components/Cadastros/Telas/TelaUsuario"
import TelaEntregador from "./components/Cadastros/Telas/TelaEntregador"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCliente from "./components/Cadastros/Telas/TelaCliente";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/produto" element={
            <TelaProduto></TelaProduto>
          } />
          <Route path="/entregador"
            element={<TelaEntregador />} />
          <Route path="/usuario"
            element={<TelaUsuario></TelaUsuario>} />
          <Route path="/categoria" element={
            <TelaCategoria></TelaCategoria>
          } />
          <Route path="/cliente" element={
            <TelaCliente></TelaCliente>
          } />
          <Route path="/fornecedor" element={
            <TelaFornecedor></TelaFornecedor>
          } />
          <Route path="" element={
            <TelaMenu></TelaMenu>
          } />
          <Route path="*" element={
            <Tela404></Tela404>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
