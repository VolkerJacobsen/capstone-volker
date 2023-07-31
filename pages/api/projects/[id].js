import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Project.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    const project = await Project.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ status: "Project successfully deleted." });
  }

  if (request.method === "PUT") {
    const project = await Project.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response
      .status(200)
      .json({ status: "Project successfully updated." });
  }
  if (request.method === "GET") {
    const project = await Product.findById(id).populate("comments");
    return response.status(200).json(project);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}