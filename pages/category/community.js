import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";
import { StyledHeaderText, StyledBox, StyledProjectListContainer } from "./category.styled";

export default function CommunityPage({ projects }) {
  const communityProjects = projects.filter(
    (project) => project.category === "Community"
  );

  return (
    <div>
      <StyledBack />
      <StyledHeaderText>Community projects</StyledHeaderText>
      <StyledBox>
        <StyledProjectListContainer>
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
        </StyledProjectListContainer>
      </StyledBox>
    </div>
  );
}
