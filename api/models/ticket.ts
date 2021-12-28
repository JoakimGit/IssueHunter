const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  priority: {
    type: String,
  },
  assignedTo: {
    type: String,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
export {}