import ProjectList from "../../components/ProjectList/ProjectList";
import { getAllProjects } from "../../utils/api";

export default function ProjectsPage({ projects }) {
  return <ProjectList projects={projects} />;
}

export async function getStaticProps() {
  // Fetch all projects data using the defined getAllProjects function
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
