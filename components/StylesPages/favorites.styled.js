import styled from "styled-components";

export const StyledHeaderText = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-left: 20px;
  margin-bottom: -100px;

  @media screen and (min-width: 769px) {
    font-size: 2rem;
  }
`;

export const StyledBackBox = styled.div`
  display: flex;
  justify-content: flex-start;
  `;

export const StyledBox = styled.div`
margin-top: -30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const StyledProjectListContainer= styled.span`
  display: grid; 
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledNote = styled.p`
  display: flex;
  justify-content: center;
`;