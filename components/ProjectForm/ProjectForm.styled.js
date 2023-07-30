import styled from "styled-components";

export const StyledFormContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  background-color: #faf8f7;
  margin: 20px;
  padding: 0 10px 10px 10px;
  border-radius: 5%;
`;
export const StyledFieldset = styled.fieldset`
  border: none;
`;
export const StyledSubmitButton = styled.button`
  color: #fff;
  border-radius: 100px;
  border: 0;
  padding: 5px 10px;
  margin: 10px auto 10px;
  cursor: pointer;
  background-color: #f18d9e;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
  align-self: center;

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;
export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;

  &::file-selector-input {
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid rgb(204 203 203);
    box-shadow: 1px 1px 1px 1px rgb(204 203 203);
    width: 100%;
  }
`;
export const StyledTextarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
`;

export const StyledSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  margin-left: 30px;
`;