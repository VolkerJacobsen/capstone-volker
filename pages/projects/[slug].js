import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { useRouter } from "next/router";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { slug } = router.query;
  const singleProject = projects.find((project) => project.slug === slug);
  console.log(singleProject);

  return (
    <ProjectDetail
      category={singleProject.category}
      title={singleProject.title}
      image={singleProject.imageSource}
      width={singleProject.width}
      height={singleProject.height}
      organizer={singleProject.organizer}
      longDescription={singleProject.longDescription}
      contact={singleProject.contact}
    />
  );
}
