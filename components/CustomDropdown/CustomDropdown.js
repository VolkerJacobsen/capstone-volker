import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
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

const StyledUL = styled.ul`
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

const StyledLIWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLI = styled.li`
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

const DropdownContainer = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export default function CustomDropdown({ onChange, selectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLabelClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <StyledSelect>
      <StyledLabel onClick={handleLabelClick}>
        {!isOpen || selectedCategory === ""
          ? "Select a Category"
          : selectedCategory}
      </StyledLabel>
      <DropdownContainer visible={isOpen ? "true" : undefined}>
        <StyledUL>
          <StyledLIWrapper>
            {selectedCategory !== "community" && (
              <StyledLI onClick={() => handleOptionClick("community")}>
                Community
              </StyledLI>
            )}
            {selectedCategory !== "environment" && (
              <StyledLI onClick={() => handleOptionClick("environment")}>
                Environment
              </StyledLI>
            )}
            {selectedCategory !== "politics" && (
              <StyledLI onClick={() => handleOptionClick("politics")}>
                Politics
              </StyledLI>
            )}
          </StyledLIWrapper>
        </StyledUL>
      </DropdownContainer>
    </StyledSelect>
  );
}
