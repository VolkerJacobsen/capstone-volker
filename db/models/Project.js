import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
type: String,
    required: true,
  },
  imageSource: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

projectSchema.index({ slug: 1, _id: 1 });

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;