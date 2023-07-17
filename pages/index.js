import ProjectList from "../components/ProjectList/ProjectList.js";
import styled from "styled-components";
import ProjectForm from "../components/ProjectForm/ProjectForm.js";
import { useState } from "react";
import { projects as initialProjects } from "../utils/data";
import Link from "next/link.js";

const HeaderText = styled.h1`
  position: relative;
  justify-self: center;
`;

const StyledAddProjectLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.1em;
  border-radius: 100px 100px 100px 100px;
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 20px 75px 10px 75px;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
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
    <>
      <HeaderText>List of projects</HeaderText>
      <StyledAddProjectLink href="/projectform">
        + Add your project
      </StyledAddProjectLink>
      <ProjectList projects={projectList} />
    </>
  );
}
