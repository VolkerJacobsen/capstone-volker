import ProjectList from "../components/ProjectList/ProjectList.js";
import styled from "styled-components";
import Image from "next/image";

const Device = styled.div`
  position: relative;
  display: block;
  width: 368px;
  height: 100vh;
  overflow: auto;
`;

const StyledImage = styled(Image)`
  display: block;
  max-width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledH1 = styled.h1`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default function HomePage() {
  return (
    <Device>
      <StyledImage
        alt="Logo getInvolved"
        src={require(`../assets/images/Logo.png`).default}
      />
      <StyledH1>List of projects</StyledH1>
      <ProjectList />
    </Device>
  );
}
