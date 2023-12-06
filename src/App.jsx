import { BrowserRouter } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Home />
          <Produtos />
          <Contato />
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
