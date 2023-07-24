import Image from "next/image";
import styled from "styled-components";
import StyledBack from "../StyledBackButton/StyledBackButton.js";
import CommentSection from "../CommentSection/CommentSection.js";
import { useState } from "react";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: -50px;
`;

const ProjectContainer = styled.div`
  background-color: #faf8f7;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
  border: 5px solid #a7c7e7;
  border-style: none none solid solid;

  .category {
    font-size: 20px;
    position: relative;
    bottom: 12px;
    left: 25px;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 10px;

  padding-left: 20px;
  padding-right: 20px;
  height: 100%;

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

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CommentFormContainer = styled.div`
  width: 100%;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
`;

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
        <HeaderText>Detailpage</HeaderText>
        <ProjectContainer>
          <p className="category">{category}</p>
          <h2>{title}</h2>
          <p>{organizer}</p>
          <StyledImage
            alt={`Photo ${title} by ${organizer}`}
            src={require(`/assets/images/${imageSource}`).default}
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
            <CommentFormContainer>
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
            </CommentFormContainer>
          )}
        </ProjectContainer>
      </div>
    );
  }
}
