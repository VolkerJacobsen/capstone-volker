import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ReplyItem from "../ReplyItem/ReplyItem";

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

const CommentItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;
`;

const ReplyFormContainer = styled.div`
  margin-left: 30px;
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
  onReplySubmit,
  replyingTo,
  setReplyingTo,
}) {
  const [replyAuthor, setReplyAuthor] = useState("");
  const [replyContent, setReplyContent] = useState("");

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
    onDeleteComment(commentId);
  };

  const handleReplyClick = (commentId) => {
    setReplyingTo((prevReplyingTo) =>
      prevReplyingTo === commentId ? null : commentId
    );
    setReplyAuthor("");
    setReplyContent("");
  };

  const handleSubmitReply = (event) => {
    event.preventDefault();
    if (replyAuthor.trim() === "" || replyContent.trim() === "") {
      return;
    }

    const newReply = {
      id: uuidv4(),
      author: replyAuthor,
      content: replyContent,
      timestamp: new Date().toISOString(),
    };

    console.log("Parent Comment ID (replyingTo):", replyingTo);
    console.log("New Reply:", newReply);

    onReplySubmit(replyingTo, newReply);

    setReplyAuthor("");
    setReplyContent("");
    setReplyingTo(null);
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
                {comment.replies && comment.replies.length > 0 && (
                  <div>
                    {comment.replies.map((reply) => (
                      <ReplyItem key={reply.id} reply={reply} />
                    ))}
                  </div>
                )}
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
                <StyledButton
                  type="button"
                  onClick={() => handleReplyClick(comment.id)}
                >
                  Reply
                </StyledButton>
              </ButtonContainer>
              {replyingTo === comment.id && (
                <ReplyFormContainer>
                  <CommentForm onSubmit={handleSubmitReply}>
                    <h2>Reply to {comment.author}</h2>
                    <label htmlFor="replyAuthor">Your Name: </label>
                    <StyledInput
                      type="text"
                      id="replyAuthor"
                      value={replyAuthor}
                      required
                      onChange={(event) => setReplyAuthor(event.target.value)}
                    />
                    <StyledTextAreaContainer>
                      <label htmlFor="replyContent">Comment: </label>
                      <Textarea
                        value={replyContent}
                        onChange={(event) =>
                          setReplyContent(event.target.value)
                        }
                        name="content"
                        id="content"
                        minLength="10"
                        maxLength="100"
                        required
                        placeholder="Enter your comment/remarks. Max. 100 characters."
                      />
                    </StyledTextAreaContainer>
                    <ButtonContainer>
                      <StyledButton type="submit">Reply</StyledButton>
                      <StyledButton
                        type="button"
                        onClick={() => setReplyingTo(null)}
                      >
                        Cancel
                      </StyledButton>
                    </ButtonContainer>
                  </CommentForm>
                </ReplyFormContainer>
              )}
            </CommentItem>
          ))}
        </CommentList>
      </CommentSectionContainer>
    </>
  );
}
