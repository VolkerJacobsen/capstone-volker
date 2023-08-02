import ProjectPreview from "../ProjectPreview/ProjectPreview.js";
import { StyledBox, StyledProjectListContainer } from "./ProjectList.styled.js";

export default function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <div>No projects found.</div>;
  }
  return (
    <StyledBox>
      <StyledProjectListContainer>
        {projects.map((project) => {
          return (
            <div key={project._id}>
              <>
                <ProjectPreview
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
