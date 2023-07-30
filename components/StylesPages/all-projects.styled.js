import styled from "styled-components";

export const StyledHeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

export const StyledButton = styled.button`
  color: #fff;
  border-radius: 100px;
  border: 0;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 0 auto 0;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
  align-self: center;

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;