import styled from "styled-components";

export const CommentSectionContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CommentForm = styled.form`
  margin: 20px 0 0 0;
  padding: 20px 0 20px 0;
  border: 5px solid #f18d9e;
  border-style: solid none solid none;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 0 40px 20px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 30%;
`;

export const StyledTextAreaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin-left: 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 87%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CommentContainer = styled.div`
  margin-bottom: -20px;
`;

export const CommentList = styled.ul`
  margin-top: 30px;
  padding-left: 0;
`;

export const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  border-radius: 100px 100px 100px 100px;
  border: 0;
  cursor: pointer;
  background-color: #5bc8ac;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;

export const CommentItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

export const ReplyFormContainer = styled.div`
  margin-left: 30px;
`;