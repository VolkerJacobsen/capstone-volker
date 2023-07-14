import Image from "next/image";
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

export default function ProjectDetail({
  project: {
    category,
    title,
    imageSource,
    longDescription,
    organizer,
    contact,
  },
}) {
  return (
    <div>
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
      <ProjectContainer>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{organizer}</p>
        <StyledImage
          alt={`Photo ${title} by ${organizer}`}
          src={require(`/assets/images/${imageSource}`).default}
          width={670}
          height={400}
        />
        <p>{longDescription}</p>
        <p>{contact}</p>
      </ProjectContainer>
    </div>
  );
}
