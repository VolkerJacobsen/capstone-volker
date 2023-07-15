import ProjectList from "../components/ProjectList/ProjectList.js";
import styled from "styled-components";
import ProjectForm from "../components/ProjectForm/ProjectForm.js";
import { useState } from "react";
import { projects as initialProjects } from "../utils/data";
import { useRouter } from "next/router";

const HeaderText = styled.h1`
  position: relative;
  justify-self: center;
`;

export default function HomePage() {
  const router = useRouter();
  const [projectList, setProjectList] = useState(initialProjects);

  function handleCategoryChange(event) {
    const category = event.target.value;
    if (category) {
      router.push(`/§{category}`);
    } else {
      router.push("/");
    }
  }

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
      <ProjectList projects={projectList} />
      <ProjectForm onAddProject={handleAddProject} />
    </>
  );
}
