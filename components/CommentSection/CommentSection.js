import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
  font-family: system-ui;
`;

export default function CommentSection() {
  return (
    <>
      <label htmlFor="comment">
        <p>Enter your comment: </p>
        <Textarea
          name="comment"
          id="comment"
          minLength="10"
          maxLength="100"
          required
          placeholder="Enter a short description. Max. 100 characters."
        />
      </label>
    </>
  );
}
