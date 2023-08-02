import ProjectPreview from "../ProjectPreview/ProjectPreview.js";
import { StyledBox, StyledProjectListContainer } from "./ProjectList.styled.js";
import useSWR from "swr";

export default function ProjectList() {
  const { data } = useSWR("/api/projects", { fallbackData: [] });
  console.log(data);

  return (
    <StyledBox>
      <StyledProjectListContainer>
        {data.map((project) => {
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
