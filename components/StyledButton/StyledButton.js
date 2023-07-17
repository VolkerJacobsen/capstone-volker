import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  border-radius: 100px 100px 100px 100px;
  border: 0;
  cursor: pointer;
  background-color: #f18d9e;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;

function Button() {
  return <StyledButton></StyledButton>;
}

export default Button;
