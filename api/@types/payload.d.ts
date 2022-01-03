declare namespace Express {
  export interface Request {
    payload: {
      _id: string;
      email: string;
      name: string;
      role: UserRole;
      company: string;
    };
  }
}
