import { User } from 'src/app/auth/models/user';

export class Comment {
  _id: string;
  content: string;
  postedBy: User;
  createdAt: Date;
  updatedAt: Date;

  constructor(content: string) {
    this.content = content;
  }
}
