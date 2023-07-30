import ProjectList from "../../components/ProjectList/ProjectList";
import { useState } from "react";
import { projects as initialProjects } from "../../utils/data";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import {StyledHeaderText, StyledButton } from "./index.styled";


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
      <StyledHeaderText>List of projects</StyledHeaderText>
      <StyledButton onClick={handleShowForm}>
        {showForm ? "CLOSE FORM" : "+ ADD PROJECT"}
      </StyledButton>
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
