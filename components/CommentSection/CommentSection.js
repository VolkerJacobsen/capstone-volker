import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CommentSectionContainer = styled.div``;

const CommentForm = styled.form``;

const CommentList = styled.ul``;

const CommentItem = styled.li``;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
  font-family: system-ui;
`;

export default function CommentSection({
  comments,
  onAddComment,
  onCloseCommentForm,
}) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author.trim() === "" || content.trim() === "") {
      return;
    }
    const newComment = {
      id: uuidv4(),
      author: author,
      content: content,
      timestamp: new Date().toISOString(),
    };
    onAddComment(newComment);
    setAuthor("");
    setContent("");
  };

  return (
    <>
      <CommentSectionContainer>
        <CommentForm onSubmit={handleSubmit}>
          <label htmlFor="author">Your Name:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
          />
          <label htmlFor="content">Comment:</label>
          <Textarea
            value={content}
            onChange={handleContentChange}
            name="content"
            id="content"
            minLength="10"
            maxLength="100"
            required
            placeholder="Enter a your comment/ remarks. Max. 100 characters."
          />
          <button type="submit">Submit Comment</button>
          <button type="button" onClick={onCloseCommentForm}>
            Close
          </button>
        </CommentForm>
        <CommentList>
          {comments.map((comment) => (
            <CommentItem key={comments.id}>
              <p>
                <strong>{comments.author}</strong> on{" "}
                {new Date(comment.timestamp).tolocaleString()}:
              </p>
              <p>{comment.content}</p>
            </CommentItem>
          ))}
        </CommentList>
      </CommentSectionContainer>
    </>
  );
}
