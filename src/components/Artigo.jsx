import { useState } from "react";
import styled from "styled-components";
import { formatarPreco } from "../utils/funcoes";

function Artigo(props) {
  const [cor, setCor] = useState("lavender");

  const mudarCor = () => {
    setCor(cor === "lavender" ? "yellow" : "lavender");
  };

  return (
    <StyledArtigo onClick={mudarCor} style={{ backgroundColor: cor }}>
      <h3> {props.categoria} </h3>
      <p>
        <b>Curso:</b> {props.titulo}
      </p>
      <p>
        <b>Preço:</b> {formatarPreco(props.preco)}
      </p>
    </StyledArtigo>
  );
}

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: purple;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;

export default Artigo;
