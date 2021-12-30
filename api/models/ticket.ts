import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String
  },
  priority: {
    type: String
  },
  assignedTo: {
    type: String
  },
  createdBy: {
    type: String
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
