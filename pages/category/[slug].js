import ProjectDetail from "../../components/ProjectDetail/ProjectDetail.js";
import { useRouter } from "next/router";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return <div>Project not found</div>;
  }
  const currentProject = projects.find((project) => project.slug === slug);

  if (!currentProject) {
    return <div>Project not found</div>;
  }
  const category = currentProject.category;

  console.log(slug);
  console.log(category);
  console.log(currentProject);

  return (
    <div>
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
    </div>
  );
}
