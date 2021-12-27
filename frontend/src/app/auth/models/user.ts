import { Role } from 'src/app/common/enums/role';

export interface User {
  _id: string;
  email: string;
  name: string;
  role: Role;
  company: string;
  exp: number;
  iat: number;
}
