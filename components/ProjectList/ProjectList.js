import ProjectPreview from "../ProjectPreview/ProjectPreview.js";
import { StyledBox, StyledProjectListContainer } from "./ProjectList.styled.js";

export default function ProjectList({ projectsData }) {
  console.log("projectsData:", projectsData);
  return (
    <StyledBox>
      <StyledProjectListContainer>
        {projectsData.map((project) => {
          return (
            <div key={project._id}>
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
