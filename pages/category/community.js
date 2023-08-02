import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";
import { StyledHeaderText, StyledBox, StyledProjectListContainer } from "../../components/StylesPages/category.styled";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CommunityPage() {
  const { data: projectsData, error } = useSWR("/api/projects", fetcher);

  if (!projectsData) return <h2>Loading...</h2>;

  if (error) {
    console.error("Error fetching projects:", error);
    return <h2>Error loading projects data.</h2>;
  }

  const communityProjects = projectsData.filter(
    (project) => project.category === "Community"
  );

  return (
    <div>
      <StyledBack />
      <StyledHeaderText>Community projects</StyledHeaderText>
      <StyledBox>
        <StyledProjectListContainer>
          {communityProjects.map((project) => (
            <div key={project._id}>
              <ProjectPreview
project={project}
              ></ProjectPreview>
            </div>
          ))}
        </StyledProjectListContainer>
      </StyledBox>
    </div>
  );
}
