import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  width: 100%;
  max-width: 100vw;
  height: 5rem;
  padding: 0px 1rem;

  background-color: var(--color1);

  img {
    width: 10rem;
  }
`;