import ProjectList from "../components/ProjectList/ProjectList.js";
import { useState } from "react";
import { projects as initialProjects } from "../utils/data";
import styled from "styled-components";
import ProjectForm from "../components/ProjectForm/ProjectForm.js";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  color: #fff;
  font-size: 1.1em;
  border-radius: 100px 100px 100px 100px;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 0 20px 20px 95px;
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
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  function handleAddProject(newProject) {
    const updatedProjectList = [
      { id: String(projectList.length + 1), ...newProject },
      ...projectList,
    ];
    setProjectList(updatedProjectList);
  }

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <HeaderText>List of projects</HeaderText>
      <StyledButton onClick={handleShowForm}>+ Add your project</StyledButton>
      {showForm && (
        <ProjectForm
          onAddProject={handleAddProject}
          onCloseForm={handleCloseForm}
        />
      )}
      <ProjectList projects={projectList} />
    </>
  );
}
