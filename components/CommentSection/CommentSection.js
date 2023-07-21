import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CommentSectionContainer = styled.div`
  margin: 20px 0 20px 0;
`;

const CommentForm = styled.form`
  margin: 20px 0 0 0;
  padding: 20px 0 20px 0;
  border: 5px solid #f18d9e;
  border-style: solid none solid none;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 0 40px 20px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 30%;
`;

const StyledTextAreaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-left: 15px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 87%;
  font-family: system-ui;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CommentContainer = styled.div`
  margin-bottom: -20px;
`;

const CommentList = styled.ul`
  margin-top: 30px;
  padding-left: 0;
`;

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
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

const CommentItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

export default function CommentSection({
  comments,
  onAddComment,
  onUpdateComment,
  onDeleteComment,
  onCloseCommentForm,
  author,
  setAuthor,
  content,
  setContent,
  editingCommentId,
  setEditingCommentId,
}) {
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author.trim() === "" || content.trim() === "") {
      return;
    }

    if (editingCommentId) {
      onUpdateComment();
    } else {
      const newComment = {
        id: uuidv4(),
        author: author,
        content: content,
        timestamp: new Date().toISOString(),
      };
      onAddComment(newComment);
      setAuthor("");
      setContent("");
    }
  };

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    setAuthor(commentToEdit.author);
    setContent(commentToEdit.content);
  };

  const handleCloseForm = () => {
    onCloseCommentForm();
  };

  const handleDeleteButtonClick = (commentId) => {
    onDeleteComment(commentId); // Call the onDeleteComment function from props
  };

  return (
    <>
      <CommentSectionContainer>
        <CommentForm onSubmit={editingCommentId ? handleSubmit : handleSubmit}>
          <h2>Send us a comment</h2>
          <label htmlFor="author">Your Name: </label>
          <StyledInput
            type="text"
            id="author"
            value={author}
            required
            onChange={(event) => setAuthor(event.target.value)}
          />
          <StyledTextAreaContainer>
            <label htmlFor="content">Comment: </label>
            <Textarea
              value={content}
              onChange={handleContentChange}
              name="content"
              id="content"
              minLength="10"
              maxLength="100"
              required
              placeholder="Enter your comment/remarks. Max. 100 characters."
            />
          </StyledTextAreaContainer>
          <ButtonContainer>
            <StyledButton type="submit">
              {editingCommentId ? "Update" : "Submit"}
            </StyledButton>
            {editingCommentId && (
              <StyledButton
                type="button"
                onClick={() => setEditingCommentId(null)}
              >
                Cancel
              </StyledButton>
            )}
            <StyledButton type="button" onClick={handleCloseForm}>
              Close
            </StyledButton>
          </ButtonContainer>
        </CommentForm>
        <CommentList>
          <h2>Previous comments</h2>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <CommentContainer>
                <p>
                  <strong>{comment.author}</strong> on{" "}
                  {new Date(comment.timestamp).toLocaleString()}
                </p>
                <p>{comment.content}</p>
              </CommentContainer>
              <ButtonContainer>
                <StyledButton
                  type="button"
                  onClick={() => handleEditComment(comment.id)}
                >
                  Edit
                </StyledButton>
                <StyledButton
                  type="button"
                  onClick={() => handleDeleteButtonClick(comment.id)}
                >
                  Delete
                </StyledButton>
              </ButtonContainer>
            </CommentItem>
          ))}
        </CommentList>
      </CommentSectionContainer>
    </>
  );
}
