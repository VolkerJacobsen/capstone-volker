import ProjectList from "../components/ProjectList/ProjectList.js";
import styled from "styled-components";
import Image from "next/image";
import ProjectForm from "../components/ProjectForm/ProjectForm.js";
import { useState } from "react";
import { projects as initialProjects } from "../utils/data";

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
  const [projectList, setProjectList] = useState(initialProjects);

  function handleAddProject(newProject) {
    const updatedProjectList = [
      { id: String(projectList.length + 1), ...newProject },
      ...projectList,
    ];
    setProjectList(updatedProjectList);
  }

  return (
    <Device>
      <StyledImage
        alt="Logo getInvolved"
        src={require(`../public/assets/images/Logo.png`).default}
      />
      <HeaderText>List of projects</HeaderText>
      <ProjectList projects={projectList} />
      <ProjectForm onAddProject={handleAddProject} />
    </Device>
  );
}
