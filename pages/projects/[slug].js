import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { useRouter } from "next/router";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return <div>Project not found</div>;
  }
  const currentProject = projects.find((project) => project.slug === slug);

  return (
    <div>
      <ProjectDetail project={currentProject} />
    </div>
  );
}
