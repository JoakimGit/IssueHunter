import mongoose from "mongoose";

export interface ProjectDoc extends mongoose.Document {
  name: string;
  description: string;
  company: string;
  members: Array<any>;
  tickets: Array<any>;
}

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    company: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }]
  },
  { timestamps: true }
);

const Project = mongoose.model<ProjectDoc>("Project", projectSchema);

export default Project;
