import ProjectList from "../components/ProjectList/ProjectList.js";
import styled from "styled-components";
import Image from "next/image";
import ProjectForm from "../components/ProjectForm/ProjectForm.js";

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

const HeaderText = styled.h1`
  position: relative;
  justify-self: center;
`;

export default function HomePage() {
  return (
    <Device>
      <StyledImage
        alt="Logo getInvolved"
        src={require(`../assets/images/Logo.png`).default}
      />
      <HeaderText>List of projects</HeaderText>
      <ProjectList />
      <ProjectForm />
    </Device>
  );
}
