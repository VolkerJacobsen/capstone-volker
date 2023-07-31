import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  margin-top: 10px;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding-top: 5px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
`;
