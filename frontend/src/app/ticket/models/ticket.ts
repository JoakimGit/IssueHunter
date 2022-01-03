import { User } from 'src/app/auth/models/user';
import {
  TicketPriority,
  TicketStatus,
  TicketType,
} from 'src/app/shared/enums/ticket';

export class Ticket {
  _id: string;
  name: string;
  description: string;
  status = TicketStatus.OPEN;
  priority = TicketPriority.LOW;
  type = TicketType.BUG;
  assignedTo: User;
  submitter: User;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date;
  comments: string[];
  projectId: string;

  constructor() {}
}
