import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton.js";
import { StyledHeaderText, StyledBox, StyledProjectListContainer } from "./category.styled";


export default function PoliticsPage({ projects }) {
  const politicsProjects = projects.filter(
    (project) => project.category === "Politics"
  );

  return (
    <div>
      <StyledBack />
      <StyledHeaderText>Political projects</StyledHeaderText>
      <StyledBox>
        <StyledProjectListContainer>
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
        </StyledProjectListContainer>
      </StyledBox>
    </div>
  );
}
