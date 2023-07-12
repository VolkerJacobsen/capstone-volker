import ProjectDetail from "@/components/ProjectDetail";
import { useRouter } from "next/router";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { slug } = router.query;
  const singleProject = projects.find((project) => slug === project.slug);
  console.log(singleProject);

  return (
    <ProjectDetail
      category={singleProject.category}
      title={singleProject.title}
      image={singleProject.imageSource}
      organizer={singleProject.organizer}
      description={singleProject.longDescription}
      contact={singleProject.contact}
    />
  );
}
