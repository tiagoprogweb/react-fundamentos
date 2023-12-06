import styled from "styled-components";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.main``;

export default Container;
