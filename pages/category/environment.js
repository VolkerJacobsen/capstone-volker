import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import styled from "styled-components";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: -30px;
`;

const EnvironmentPage = ({ projects }) => {
  const environmentProjects = projects.filter(
    (project) => project.category === "Environment"
  );

  return (
    <div>
      <StyledBack />
      <HeaderText>Environmental projects</HeaderText>
      {environmentProjects.map((project) => (
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

export default EnvironmentPage;
