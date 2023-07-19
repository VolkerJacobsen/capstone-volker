import Image from "next/image";
import styled from "styled-components";
import StyledBack from "../StyledBackButton/StyledBackButton.js";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: -50px;
`;

const ProjectContainer = styled.div`
  background-color: #faf8f7;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
  border: 5px solid #a7c7e7;
  border-style: none none solid solid;

  .category {
    font-size: 20px;
    position: relative;
    bottom: 12px;
    left: 25px;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

const StyledBackButton = styled.button`
  background-color: white;
  border: none;
  margin: 20px;
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
      <StyledBack />
      <HeaderText>Detailpage</HeaderText>
      <ProjectContainer>
        <p className="category">{category}</p>
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
