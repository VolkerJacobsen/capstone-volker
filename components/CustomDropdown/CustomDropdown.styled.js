import styled from "styled-components";


export const StyledSelect = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  background-color: #fff;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: black;
  }

  @media (max-width: 768px) {
    background-color: #a7c7e7;
    color: white;
    &:hover {
      text-decoration: none;
      color: white;
    }
  }
`;

export const StyledUL = styled.ul`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  //width: 100%;
  background-color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1;
  height: auto;

  @media (max-width: 768px) {
    background-color: #a7c7e7;
    color: white;
  }
`;

export const StyledLIWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLI = styled.li`
  padding: 10px;
  cursor: pointer;

  &:first-child {
    border: 2px solid black;
    border-style: none none solid none;
  }
  &:last-child {
    border: 2px solid black;
    border-style: solid none none none;
  }

  @media (max-width: 768px) {
    &:first-child {
      border: 2px solid white;
      border-style: none none solid none;
    }
    &:last-child {
      border: 2px solid white;
      border-style: solid none none none;
    }
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DropdownContainer = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;