import ProjectPreview from "../ProjectPreview/ProjectPreview.js";
import styled from "styled-components";

const StyledBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledProjectListContainer = styled.span`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

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
