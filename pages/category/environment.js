import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import styled from "styled-components";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
`;

const EnvironmentPage = ({ projects }) => {
  const environmentProjects = projects.filter(
    (project) => project.category === "Environment"
  );

  return (
    <div>
      <HeaderText>Environment Projects</HeaderText>
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
