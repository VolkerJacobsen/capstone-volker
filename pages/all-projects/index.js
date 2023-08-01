import ProjectList from "../../components/ProjectList/ProjectList";
import { useState } from "react";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import {StyledHeaderText, StyledButton } from "../../components/StylesPages/all-projects.styled";
import dbConnect from "../../db/connect";
import Project from "../../db/models/Project";

export async function getServerSideProps() {
  try {
    await dbConnect();

    const projects = await Project.find();

    const projectsData = JSON.parse(JSON.stringify(projects));
    
        return {
          props: {
            projectsData,
          },
        };
      } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        return {
                  props: {
                    projectsData: [],
                  },
                };
              }
            }


export default function HomePage() {
  const projectsData = useProjectsData();
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  function handleAddProject(newProject) {
   Project.create(newProject)
   .then((createdProject) => {
    console.log("New project created: ", createdProject);
    setProjectList((prevProjects) = [createdProject,...prevProjects]);
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
