import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import styled from "styled-components";
import StyledBack from "../../components/StyledBackButton/StyledBackButton.js";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: -30px;
`;

const PoliticsPage = ({ projects }) => {
  const politicsProjects = projects.filter(
    (project) => project.category === "Politics"
  );

  return (
    <div>
      <StyledBack />
      <HeaderText>Political projects</HeaderText>
      {politicsProjects.map((project) => (
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
    </div>
  );
};

export default PoliticsPage;
