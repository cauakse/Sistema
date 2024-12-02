import Tela404 from "./components/Cadastros/Telas/Tela404";
import TelaMenu from "./components/Cadastros/Telas/TelaMenu"
import TelaProduto from "./components/Cadastros/Telas/TelaProduto"
import TelaCategoria from "./components/Cadastros/Telas/TelaCategoria"
import TelaFornecedor from "./components/Cadastros/Telas/TelaFornecedor"
import TelaUsuario from "./components/Cadastros/Telas/TelaUsuario"
import TelaEntregador from "./components/Cadastros/Telas/TelaEntregador"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCliente from "./components/Cadastros/Telas/TelaCliente";
import { useState,createContext } from "react";
import TelaLogin from "./components/Cadastros/Telas/TelaLogin";
import store from "./redux/store";
import { Provider } from "react-redux";

export const contextoUsuario = createContext();

function App() {
  const [usuario, setUsuario] = useState({
    "usuario": "",
    "logado": false
  });

  if (!usuario.logado) {
    return (
      <contextoUsuario.Provider value={setUsuario}>
      <TelaLogin></TelaLogin>
      </contextoUsuario.Provider>
    )
  }
  else
    return (
      <div className="App">
        <Provider store={store}>
        <contextoUsuario.Provider value={{usuario,setUsuario}}>
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
            <Route path="/Sistema" element={
              <TelaMenu></TelaMenu>
            } />
            <Route path="*" element={
              <Tela404></Tela404>
            } />
          </Routes>
        </BrowserRouter>
        </contextoUsuario.Provider>
        </Provider>
        
      </div>
    );
}

export default App;
