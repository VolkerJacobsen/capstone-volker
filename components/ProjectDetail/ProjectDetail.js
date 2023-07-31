import StyledBack from "../StyledBackButton/StyledBackButton.js";
import CommentSection from "../CommentSection/CommentSection.js";
import { useState } from "react";
import { StyledHeaderText, StyledBox, StyledProjectContainer, StyledImage, StyledButton, StyledButtonContainer, StyledCommentFormContainer, StyledLink } from "./PorjectDetail.styled.js"


export default function ProjectDetail({
  project: {
    category,
    title,
    imageSource,
    longDescription,
    organizer,
    contact,
  },
}) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handleShowCommentForm = () => {
    setShowCommentForm((prevState) => !prevState);
  };

  const handleCloseCommentForm = () => {
    setShowCommentForm(false);
  };

  const handleAddComment = (newComment) => {
    const updatedCommentList = [...comments, newComment];
    setComments(updatedCommentList);
  };

  const handleUpdateComment = () => {
    if (author.trim() === "" || content.trim() === "") {
      return;
    }
    const updatedComment = {
      id: editingCommentId,
      author: author,
      content: content,
      timestamp: new Date().toISOString(),
    };
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === editingCommentId ? updatedComment : comment
      )
    );
    setAuthor("");
    setContent("");
    setEditingCommentId(null);
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
    if (editingCommentId === commentId) {
      setAuthor("");
      setContent("");
      setEditingCommentId(null);
    }
  };

  const handleReplySubmit = (commentId, newReply) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, replies: [...(comment.replies || []), newReply] }
        : comment
    );

    console.log("Updated Comments:", updatedComments);

    setComments(updatedComments);
  };

  {
    return (
      <div>
        <StyledBack />
        <StyledHeaderText>Detailpage</StyledHeaderText>
        <StyledBox>
          <StyledProjectContainer>
            <p className="category">{category}</p>
            <h2>{title}</h2>
            <p>{organizer}</p>
            <StyledImage
              alt={`Photo ${title} by ${organizer}`}
              src={imageSource}
              width={670}
              height={400}
            />
            <p>{longDescription}</p>
            <StyledButtonContainer>
              <StyledButton>
                <StyledLink href={`mailto:${contact}`}>Contact us</StyledLink>
              </StyledButton>
              <StyledButton onClick={handleShowCommentForm}>
                Leave a note
              </StyledButton>
            </StyledButtonContainer>
            {showCommentForm && (
              <StyledCommentFormContainer>
                <CommentSection
                  comments={comments}
                  onAddComment={handleAddComment}
                  onCloseCommentForm={handleCloseCommentForm}
                  onUpdateComment={handleUpdateComment}
                  onDeleteComment={handleDeleteComment}
                  author={author}
                  setAuthor={setAuthor}
                  content={content}
                  setContent={setContent}
                  editingCommentId={editingCommentId}
                  setEditingCommentId={setEditingCommentId}
                  onReplySubmit={handleReplySubmit}
                  replyingTo={replyingTo}
                  setReplyingTo={setReplyingTo}
                />
              </StyledCommentFormContainer>
            )}
          </StyledProjectContainer>
        </StyledBox>
      </div>
    );
  }
}
