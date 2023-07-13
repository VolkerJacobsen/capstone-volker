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
`;

export default function ProjectPreview({
  category,
  title,
  imageSource,
  organizer,
  width,
  height,
  shortDescription,
  slug,
}) {
  return (
    <Link href={`/projects/${slug}`}>
      <ProjectContainer>
        <p>{category}</p>
        <h2>{title}</h2>
        <StyledImage
          src={`/assets/images/${imageSource}`}
          alt={`Photo ${title} by ${organizer}`}
          width={width}
          height={height}
        ></StyledImage>
        <p>{shortDescription}</p>
      </ProjectContainer>
    </Link>
  );
}
