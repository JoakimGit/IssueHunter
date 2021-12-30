import { Role } from 'src/app/shared/enums/role';

export interface User {
  _id: string;
  email: string;
  name: string;
  role: Role;
  company: string;
  exp: number;
}
