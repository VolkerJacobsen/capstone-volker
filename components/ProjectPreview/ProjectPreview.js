import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ProjectContainer = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function ProjectPreview({ project }) {
  return (
    <StyledLink href={`/projects/${project.slug}`}>
      <ProjectContainer>
        <p>{project.category}</p>
        <h2>{project.title}</h2>
        <StyledImage
          src={`/assets/images/${project.imageSource}`}
          alt={`Photo ${project.title} by ${project.organizer}`}
          width={project.width}
          height={project.height}
        ></StyledImage>
        <p>{project.shortDescription}</p>
      </ProjectContainer>
    </StyledLink>
  );
}
