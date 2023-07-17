import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";

const PoliticsPage = ({ projects }) => {
  const politicsProjects = projects.filter(
    (project) => project.category === "Politics"
  );

  return (
    <div>
      <h1>Political Projects</h1>
      {politicsProjects.map((project) => (
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
