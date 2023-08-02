import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import { useRouter } from "next/router";
import connectToDatabase from '../../db/connect.js';
import Project from '../../db/models/Project.js';

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    await connectToDatabase();
    console.log('Fetching projects...');
    const projects = await Project.find();
    console.log('Fetched projects:', projects);
    const projectsData = JSON.parse(JSON.stringify(projects));
    console.log('Parsed projects data:', projectsData);
    
    const currentProject = projectsData.find((project) => project.slug === slug);

    return {
      props: {
        currentProject,
      },
    };
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return {
      props: {
        currentProject: null,
      },
    };
  }
}

export default function ProjectDetailsPage({ currentProject }) {
  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectDetail project={currentProject} />
    </div>
  );
}
