import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Pagina404 from "./pages/Pagina404";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={Contato} path="/contato" />
            <Route Component={Pagina404} path="*" />
          </Routes>
        </Container>
        <Rodape />
      </Router>
    </>
  );
}

export default App;
