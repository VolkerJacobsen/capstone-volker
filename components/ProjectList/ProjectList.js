import ProjectPreview from "../ProjectPreview/ProjectPreview";

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        return (
          <li key={project.slug}>
            <ProjectPreview key={project.id}>
              category={project.category}
              title={project.title}
              imageSource={project.imageSource}
              width={project.width}
              height={project.heigth}
              slug={project.slug}
              description={project.shortDescription}
            </ProjectPreview>
          </li>
        );
      })}
    </div>
  );
}
