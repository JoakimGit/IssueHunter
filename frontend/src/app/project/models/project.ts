import { User } from 'src/app/auth/models/user';
import { Ticket } from 'src/app/ticket/models/ticket';

export class Project {
  _id: string;
  name: string;
  description: string;
  company: string;
  members: User[];
  tickets: Ticket[];
}
