import ProjectDetail from "../../components/ProjectDetail/ProjectDetail.js";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function ProjectDetailsPage() {
  const [projects] = useLocalStorageState("projects", { defaultValue: [] });
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return <div>Project not found</div>;
  }
  const currentProject = projects.find((project) => project.slug === slug);
  console.log("Current Project:", currentProject);

  if (!currentProject) {
    return <div>Project not found</div>;
  }
  const category = currentProject.category;

  return (
    <span>
      {category === "Environment" && (
        <div>
          <h2>Environment Project</h2>
          <ProjectDetail project={currentProject} />
        </div>
      )}
      {category === "Politics" && (
        <div>
          <h2>Political Project</h2>
          <ProjectDetail project={currentProject} />
        </div>
      )}
      {category === "Community" && (
        <div>
          <h2>Community Project</h2>
          <ProjectDetail project={currentProject} />
        </div>
      )}
    </span>
  );
}
