import { User } from 'src/app/auth/models/user';
import {
  TicketPriority,
  TicketStatus,
  TicketType,
} from 'src/app/shared/enums/ticket';

export interface Ticket {
  _id: string;
  name: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  type: TicketType;
  assignedTo: User;
  submitter: User;
  createdOn: Date;
  updatedOn: Date;
  dueDate: Date;
  comments: string[];
  project: string;
}
