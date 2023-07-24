import ProjectList from "../../components/ProjectList/ProjectList";
import { useState } from "react";
import { projects as initialProjects } from "../../utils/data";
import styled from "styled-components";
import ProjectForm from "../../components/ProjectForm/ProjectForm";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  color: #fff;
  font-size: 1.1em;
  border-radius: 100px;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 0 auto 0;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
  align-self: center;

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
      <StyledButton onClick={handleShowForm}>+ ADD PROJECT</StyledButton>
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
