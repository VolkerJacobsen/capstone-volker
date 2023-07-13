import ProjectPreview from "../ProjectPreview/ProjectPreview.js";

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <>
              <ProjectPreview
                category={project.category}
                title={project.title}
                imageSource={project.imageSource}
                width={project.width}
                height={project.height}
                organizer={project.organizer}
                shortDescription={project.shortDescription}
              ></ProjectPreview>
            </>
          </div>
        );
      })}
    </div>
  );
}
