import { useState } from "react";
import { StyledSelect, StyledLabel, StyledUL, StyledLIWrapper, StyledLI, DropdownContainer} from "./CustomDropdown.styled";

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
