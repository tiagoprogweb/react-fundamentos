import { BrowserRouter as Router } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Container>
          <Home />
          <Produtos />
          <Contato />
        </Container>
        <Rodape />
      </Router>
    </>
  );
}

export default App;
