import Image from "next/image";
import styled from "styled-components";

export const StyledContentContainer = styled.div`
  background-color: #faf8f7;
  margin: 10px 20px 10px 20px;
  padding: 0 10px 10px 10px;
  border-radius: 5%;
`;

export const StyledImage = styled(Image)`
  margin-top: 10px;
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

export const StyledHeaderText = styled.h1`
  display: flex;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const StyledContactContainer = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledEmailLink = styled.a`
  text-decoration: underline;
  color: #f18d9e;
  cursor: pointer;
`;