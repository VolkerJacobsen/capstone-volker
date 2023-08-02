import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton.js";
import { StyledHeaderText, StyledBox, StyledProjectListContainer } from "../../components/StylesPages/category.styled";
import connectToDatabase from '../../db/connect.js';
import Project from '../../db/models/Project';

export async function getServerSideProps() {
  try {
    await connectToDatabase();
    console.log('Fetching projects...');
    const projects = await Project.find();
    console.log('Fetched projects:', projects);
    const projectsData = JSON.parse(JSON.stringify(projects));
    console.log('Parsed projects data:', projectsData);
    return {
      props: {
        projectsData,
      },
    };
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return {
      props: {
        projectsData: [],
      },
    };
  }
}

export default function PoliticsPage({ projectsData }) {
  const politicsProjects = projectsData.filter(
    (project) => project.category === "Politics"
  );

  return (
    <div>
      <StyledBack />
      <StyledHeaderText>Political projects</StyledHeaderText>
      <StyledBox>
        <StyledProjectListContainer>
          {politicsProjects.map((project) => (
            <div key={project._id}>
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
        </StyledProjectListContainer>
      </StyledBox>
    </div>
  );
}
