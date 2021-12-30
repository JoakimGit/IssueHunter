import { Role } from 'src/app/shared/enums/role';

export interface TokenResponse {
  token: string;
}

export class TokenPayload {
  email!: string;
  password!: string;
  name?: string;
  role?: Role;
  company?: string;

  constructor(
    email: string,
    password: string,
    name: string,
    role: Role,
    company: string
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.role = role;
    this.company = company;
  }
}
