import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import ReplyItem from "../ReplyItem/ReplyItem";
import {CommentSectionContainer, CommentForm, StyledInput, StyledTextAreaContainer, Textarea, ButtonContainer, CommentContainer, CommentList, StyledButton, CommentItem, ReplyFormContainer } from "./CommentSection.styled";


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
