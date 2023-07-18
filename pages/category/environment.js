import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";

const EnvironmentPage = ({ projects }) => {
  const environmentProjects = projects.filter(
    (project) => project.category === "Environment"
  );

  return (
    <div>
      <h2>Environment Projects</h2>
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
