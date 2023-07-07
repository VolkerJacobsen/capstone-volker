import styled from "styled-components";
import Image from "next/image";
import React from "react";
import { projects } from "../../utils/data";

const ProjectPreview = styled.div``;

export default function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectPreview key={project.id} className={`div__${project.category}`}>
          <h2>{project.title}</h2>
          <p>{project.category}</p>
          <Image
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
