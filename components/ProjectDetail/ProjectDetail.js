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

  const handleShowCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleCloseCommentForm = () => {
    setShowCommentForm(false);
  };

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
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
              />
            </CommentFormContainer>
          )}
        </ProjectContainer>
      </div>
    );
  }
}
