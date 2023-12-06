import { useState } from "react";
import cursos from "../api/cursos";
import Artigo from "./Artigo";
import styled from "styled-components";
import { formatarPreco } from "../utils/funcoes";

function Conteudo() {
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event) => {
    const categoriaEscolhida = event.currentTarget.innerText;
    setCategoria(categoriaEscolhida);
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

  const quantidade = cursosFiltrados.length;

  /* ANOTAÇÃO PRA MIM NUM FUTURO PRÓXIMO:
ESSA PARTE DA QUANTIDADE E DA SOMA, PODE SER UM BOM
EXEMPLO PRA APLICAR USEEFFECT QUANDO SE TRABALHAR COM DADOS VINDOS
DE UMA API, EM QUE O ASSINCRONO PODE IMPACTAR NO CARREGAMENTO E EXIBIÇÃO
DA SOMA E DA QUANTIDADE. */

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
          <button
            className={categoria === "Front-End" ? "ativo" : ""}
            onClick={aplicarFiltro}
          >
            Front-End
          </button>
          <button
            className={categoria === "Back-End" ? "ativo" : ""}
            onClick={aplicarFiltro}
          >
            Back-End
          </button>
          <button
            className={categoria === "Mobile" ? "ativo" : ""}
            onClick={aplicarFiltro}
          >
            Mobile
          </button>
          <button
            className={categoria === "Design" ? "ativo" : ""}
            onClick={aplicarFiltro}
          >
            Design
          </button>
          <button
            className={categoria === "Engenharia" ? "ativo" : ""}
            onClick={aplicarFiltro}
          >
            Engenharia
          </button>
          <button
            className={categoria === "Gastronomia" ? "ativo" : ""}
            onClick={aplicarFiltro}
          >
            Gastronomia
          </button>
          {categoria && (
            <button onClick={limparFiltro}>🧹 Limpar filtros</button>
          )}
        </p>
        {categoria && <p>Escolhido: {categoria}</p>}
        <p>Total dos preços: {formatarPreco(somaValores)}</p>
        <p>Quantidade de cursos: {quantidade}</p>
      </div>

      <div className="artigos">
        {quantidade === 0 && (
          <p style={{ color: "red", textAlign: "center" }}>
            <b>Não há cursos desta categoria!</b>
          </p>
        )}
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
  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }

  .filtros button {
    margin: 0.5rem;
  }

  .filtros .ativo {
    background-color: black;
    color: white;
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
