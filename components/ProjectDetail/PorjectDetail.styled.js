import styled from "styled-components";
import Image from "next/image";

export const StyledHeaderText = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: -50px;
  padding-bottom: 20px;
  margin-left: 20px;
`;

export const StyledBox = styled.div`
  max-width: 768px;
  margin: 0 auto 0;
`;

export const StyledProjectContainer = styled.div`
  background-color: #faf8f7;
  margin: 20px;
  padding: 0 10px 10px 10px;
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

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

export const StyledButton = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1rem;
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

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledCommentFormContainer = styled.div`
  width: 100%;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
`;