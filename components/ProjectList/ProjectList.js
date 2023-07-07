import styled from "styled-components";
import Image from "next/image";
import React from "react";
import { projects } from "../../utils/data";

const ProjectPreview = styled.div`
  background-color: #faf8f7;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

export default function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectPreview key={project.id} className={`div__${project.category}`}>
          <p>{project.category}</p>
          <h2>{project.title}</h2>
          <StyledImage
            alt={`Photo ${project.title} by ${project.organizer}`}
            src={require(`../../assets/images/${project.imageSource}`).default}
            width={project.width}
            height={project.height}
          />
          <p>{project.shortDescription}</p>
        </ProjectPreview>
      ))}
    </div>
  );
}
