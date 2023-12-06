/* Menu.jsx */
import styled from "styled-components";

function Menu() {
  return (
    <StyledMenu>
      <a href="/">Home</a>
      <a href="/produtos">Produtos</a>
      <a href="/contato">Contato</a>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    /* & -> referência ao
    seletor pai (a) */
    &:hover {
      background-color: pink;
      color: black;
      transform: scale(1.05);
    }
  }
`;

export default Menu;
