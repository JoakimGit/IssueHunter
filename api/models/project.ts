import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: Array
  },
  members: {
    type: Array
  },
  tickets: {
    type: Array
  }
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
