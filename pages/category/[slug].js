import ProjectDetail from "../../components/ProjectDetail/ProjectDetail.js";
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
    <span>
      {category === "Environment" && (
        <div>
          <h2>Environment Project</h2>
          <ProjectDetail project={projectData} />
        </div>
      )}
      {category === "Politics" && (
        <div>
          <h2>Political Project</h2>
          <ProjectDetail project={projectData} />
        </div>
      )}
      {category === "Community" && (
        <div>
          <h2>Community Project</h2>
          <ProjectDetail project={projectData} />
        </div>
      )}
    </span>
  );
}
