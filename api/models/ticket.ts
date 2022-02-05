import mongoose, { Schema } from "mongoose";
import { TicketPriority, TicketStatus, TicketType } from "../enums/ticket";

export interface TicketDoc extends mongoose.Document {
  name: string;
  description: string;
  status: string;
  priority: string;
  type: TicketType;
  assignedTo: string;
  submitter: string;
  dueDate: Date;
  comments: any[];
  project: string;
}

const commentSchema = new Schema(
  {
    content: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const ticketSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    status: {
      type: String,
      enum: TicketStatus
    },
    priority: {
      type: String,
      enum: TicketPriority
    },
    type: {
      type: String,
      enum: TicketType
    },
    dueDate: {
      type: Date
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    submitter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    project: String,
    comments: [commentSchema]
  },
  { timestamps: true }
);

const Ticket = mongoose.model<TicketDoc>("Ticket", ticketSchema);
export const Comment = mongoose.model("Comment", commentSchema);

export default Ticket;
