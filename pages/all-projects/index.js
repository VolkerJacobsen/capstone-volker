import ProjectList from "../../components/ProjectList/ProjectList";
import { useState } from "react";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import {StyledHeaderText, StyledButton } from "../../components/StylesPages/all-projects.styled";
import connectToDatabase from '../../db/connect.js';
import Project from '../../db/models/Project.js';

export async function getServerSideProps() {
  try {
    await connectToDatabase();
    console.log('Fetching projects...');
    const projects = await Project.find();
    console.log('Fetched projects:', projects);
    const projectsData = JSON.parse(JSON.stringify(projects));
    console.log('Parsed projects data:', projectsData);
    return {
      props: {
        projectsData,
      },
    };
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return {
      props: {
        projectsData: [],
      },
    };
  }
}

export default function HomePage({projectsData}) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  function handleAddProject(newProject) {
   Project.create(newProject)
   .then((createdProject) => {
    console.log("New project created: ", createdProject);
    const updatedProjectData = [...projectsData, createdProject];
    console.log("Updated projectsData:", updatedProjectsData);
   })
   .catch((error) => {
    console.log("Error creating new project:", error);
  })
};

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

      <ProjectList projects={projectsData} />
    </>
  );
}
