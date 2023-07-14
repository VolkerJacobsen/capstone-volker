import ProjectPreview from "../ProjectPreview/ProjectPreview.js";

const EnvironmentPage = (projects) => {
  const environmentProjects = projects.filter(
    (project) => project.category === "Community"
  );

  return (
    <div>
      <h1>Communtiy Projects</h1>
      {environmentProjects.map((project) => (
        <div key={project.id}>
          <ProjectPreview
            category={project.category}
            title={project.title}
            imageSource={project.imageSource}
            organizer={project.organizer}
            shortDescription={project.shortDescription}
            slug={project.slug}
          ></ProjectPreview>
        </div>
      ))}
    </div>
  );
};

export default EnvironmentPage;
