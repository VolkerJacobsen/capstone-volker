import ProjectPreview from "../ProjectPreview/ProjectPreview.js";
import { StyledBox, StyledProjectListContainer } from "./ProjectList.styled.js";

export default function ProjectList({ projects }) {
  return (
    <StyledBox>
      <StyledProjectListContainer>
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <>
                <ProjectPreview
                  category={project.category}
                  title={project.title}
                  imageSource={project.imageSource}
                  organizer={project.organizer}
                  shortDescription={project.shortDescription}
                  slug={project.slug}
                  project={project}
                ></ProjectPreview>
              </>
            </div>
          );
        })}
      </StyledProjectListContainer>
    </StyledBox>
  );
}
