export interface Ticket {
  _id: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  assignedTo: string;
  createdBy: string;
}