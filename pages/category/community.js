import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import styled from "styled-components";

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
`;

const CommunityPage = ({ projects }) => {
  const communityProjects = projects.filter(
    (project) => project.category === "Community"
  );

  return (
    <div>
      <HeaderText>Community projects</HeaderText>
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
    </div>
  );
};

export default CommunityPage;
