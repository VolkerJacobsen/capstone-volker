import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import styled from "styled-components";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";

const HeaderText = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: -20px;
  margin-left: 20px;

  @media screen and (min-width: 769px) {
    font-size: 2rem;
  }
`;

const StyledBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const ProjectListContainer = styled.span`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function CommunityPage({ projects }) {
  const communityProjects = projects.filter(
    (project) => project.category === "Community"
  );

  return (
    <div>
      <StyledBack />
      <HeaderText>Community projects</HeaderText>
      <StyledBox>
        <ProjectListContainer>
          {communityProjects.map((project) => (
            <div key={project.id}>
              <ProjectPreview
                category={project.category}
                title={project.title}
                imageSource={project.imageSource}
                organizer={project.organizer}
                shortDescription={project.shortDescription}
                slug={project.slug}
              ></ProjectPreview>
            </div>
          ))}
        </ProjectListContainer>
      </StyledBox>
    </div>
  );
}
