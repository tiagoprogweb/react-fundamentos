import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <>
      <Cabecalho />
      <Home />
      <Produtos />
      <Contato />
      <Rodape />
    </>
  );
}

export default App;
