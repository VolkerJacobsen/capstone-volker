import { connectToDatabase } from "../../../db/dbUtils.js";

export default async function handler(request, response) {
  const { id } = request.query;

  if (request.method === 'DELETE') {
    try {
      const client = await connectToDatabase();
      const collection = client.db().collection('projects');
      const project = await collection.findOneAndDelete({ _id: id });
      return response
        .status(200)
        .json({ status: 'Project successfully deleted.' });
    } catch (error) {
      console.log('Error deleting project:', error);
      return response.status(500).json({ message: 'Failed to delete project.' });
    }
  }

  if (request.method === 'PUT') {
    // Extract the updated project data from the request body
    const { title, shortDescription, longDescription, category, organizer, contact } = request.body;

    try {
      const client = await connectToDatabase();
      const collection = client.db().collection('projects');
      const updatedProject = await collection.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            title,
            shortDescription,
            longDescription,
            category,
            organizer,
            contact,
          },
        },
        { returnOriginal: false }
      );

      return response.status(200).json({ status: 'Project successfully updated.', project: updatedProject.value });
    } catch (error) {
      console.log('Error updating project:', error);
      return response.status(500).json({ message: 'Failed to update project.' });
    }
  }

  if (request.method === 'GET') {
    try {
      const client = await connectToDatabase();
      const collection = client.db().collection('projects');
      const project = await collection.findOne({ _id: id });
      return response.status(200).json(project);
    } catch (error) {
      console.log('Error fetching project:', error);
      return response.status(500).json({ message: 'Failed to fetch project.' });
    }
  }

  return response.status(405).json({ message: 'Method not allowed' });
}