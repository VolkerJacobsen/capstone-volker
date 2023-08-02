import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { slug } = router.query;

  const { data: projectsData, error } = useSWR("/api/projects", fetcher);

  if (!isReady || !projectsData) return <h2>Loading...</h2>;

  if (error) {
    console.error("Error fetching projects:", error);
    return <h2>Error loading projects data.</h2>;
  }

  // Filter the project data for the given slug
  const projectData = projectsData.find((project) => project.slug === slug);

  if (!projectData) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
      <ProjectDetail project={projectData} />
    </div>
  );
}
