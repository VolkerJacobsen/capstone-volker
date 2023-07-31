import dbConnect from "../../../db/connect.js";
import Project from "../../../db/models/Project.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const projectData = request.body;
      await Project.create(projectData);
      return response.status(201).json({ status: "Project create." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const projects = await Project.find();
    return response.status(200).json(projects);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}