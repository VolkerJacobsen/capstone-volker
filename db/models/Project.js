import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  project: { type: String, required: true },
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;