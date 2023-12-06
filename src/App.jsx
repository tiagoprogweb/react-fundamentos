import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
          <Routes>
            <Route Component={Home} />
            <Route Component={Produtos} />
            <Route Component={Contato} />
          </Routes>
        </Container>
        <Rodape />
      </Router>
    </>
  );
}

export default App;
