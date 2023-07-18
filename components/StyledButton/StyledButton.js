import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  font-size: 1.1em;
  border-radius: 100px 100px 100px 100px;
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 20px 20px 10px 50px;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;

function Button() {
  return <StyledButton></StyledButton>;
}

export default Button;
