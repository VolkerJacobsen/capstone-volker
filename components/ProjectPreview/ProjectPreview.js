import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ProjectContainer = styled.div`
  background-color: #faf8f7;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
  border-left-style: #a7c7e7 5px solid;
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

export default function ProjectPreview({
  category,
  title,
  imageSource,
  organizer,
  shortDescription,
  slug,
}) {
  return (
    <StyledLink href={`/projects/${slug}`}>
      <ProjectContainer>
        <p>{category}</p>
        <h2>{title}</h2>
        <StyledImage
          src={
            imageSource.startsWith("/")
              ? imageSource
              : `/assets/images/${imageSource}`
          }
          alt={`Photo ${title} by ${organizer}`}
          width={670}
          height={400}
        ></StyledImage>
        <p>{shortDescription}</p>
      </ProjectContainer>
    </StyledLink>
  );
}
