import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
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

  return (
    <div>
      {currentProject ? (
        <ProjectDetail project={currentProject} />
      ) : (
        <div>Project not found</div>
      )}
    </div>
  );
}
