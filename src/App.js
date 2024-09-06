import Tela from "./components/Cadastros/Tela";
import Tela404 from "./components/Cadastros/Tela404";
import TelaMenu from "./components/Cadastros/TelaMenu"
import CadastroProduto from "./components/Cadastros/CadastroProduto";
import CadastroCategoria from "./components/Cadastros/CadastroCategoria";
import CadastroCliente from "./components/Cadastros/CadastroCliente";
import CadastroFornecedor from "./components/Cadastros/CadastroFornecedor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/produto" element={
            <Tela nome="Produto">
              <CadastroProduto></CadastroProduto>
            </Tela>
          } />

          <Route path="/categoria" element={
            <Tela nome="Categoria">
              <CadastroCategoria></CadastroCategoria>
            </Tela>
          } />

          <Route path="/cliente" element={
            <Tela nome="Cliente">
              <CadastroCliente></CadastroCliente>
            </Tela>
          } />
          <Route path="/fornecedor" element={
            <Tela nome="Fornecedor">
              <CadastroFornecedor></CadastroFornecedor>
            </Tela>
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
