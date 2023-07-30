import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";
import { StyledHeaderText, StyledBox, StyledProjectListContainer } from "./category.styled";


export default function EnvironmentPage({ projects }) {
  const environmentProjects = projects.filter(
    (project) => project.category === "Environment"
  );

  return (
    <div>
      <StyledBack />
      <StyledHeaderText>Environmental projects</StyledHeaderText>
      <StyledBox>
        <StyledProjectListContainer>
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
        </StyledProjectListContainer>
      </StyledBox>
    </div>
  );
}
