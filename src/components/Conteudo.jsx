import { useState } from "react";
import cursos from "../api/cursos";
import Artigo from "./Artigo";
import styled from "styled-components";
import { formatarPreco } from "../utils/funcoes";

function Conteudo() {
  const [categoria, setCategoria] = useState(null);
  const [total, setTotal] = useState(0);

  const aplicarFiltro = (event) => {
    const categoriaEscolhida = event.currentTarget.innerText;
    // alert(categoriaEscolhida);
    setCategoria(categoriaEscolhida);
    // setCategoria((categoriaAtual) =>
    //   categoriaAtual === categoriaEscolhida ? null : categoriaEscolhida
    // );

    // setTotal(somaValores);
  };

  const limparFiltro = () => {
    setCategoria(null);
  };

  const cursosFiltrados = cursos.filter(
    (curso) => categoria === null || curso.categoria === categoria
  );

  const somaValores = cursosFiltrados.reduce((acumulador, curso) => {
    return acumulador + curso.preco;
  }, 0);

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="filtros">
        <p>
          <b>Filtrar por: </b>
          <button onClick={aplicarFiltro}>Front-End</button>
          <button onClick={aplicarFiltro}>Back-End</button>
          <button onClick={aplicarFiltro}>Mobile</button>
          <button onClick={aplicarFiltro}>Design</button>
          <button onClick={aplicarFiltro}>Engenharia</button>
          <button onClick={aplicarFiltro}>Gastronomia</button>
          {categoria && (
            <button onClick={limparFiltro}>🧹 Limpar filtros</button>
          )}
        </p>
        {categoria && <p>Escolhido: {categoria}</p>}
        <p>Total dos preços: {formatarPreco(somaValores)}</p>
      </div>

      <div className="artigos">
        {cursosFiltrados.map((curso) => (
          <Artigo
            key={curso.id}
            categoria={curso.categoria}
            titulo={curso.titulo}
            preco={curso.preco}
          />
        ))}
      </div>
    </StyledConteudo>
  );
}

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    margin: 0.5rem;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      & article {
        width: 48%;
        margin: 1%;
      }
    }
  }
`;

export default Conteudo;
