import ProjectPreview from "../ProjectPreview/ProjectPreview.js";

const PoliticsPage = (projects) => {
  const environmentProjects = projects.filter(
    (project) => project.category === "Politics"
  );

  return (
    <div>
      <h1>Political Projects</h1>
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

export default PoliticsPage;
