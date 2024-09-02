import Pagina from "./components/layouts/Pagina";
import Tela from "./components/layouts/Cadastros/Tela";

function App() {
  return (
    <div className="App">
      <Pagina>
        <Tela nome="Fornecedor"></Tela>
      </Pagina>
    </div>
  );
}

export default App;
