import { Request, Response, NextFunction } from "express";

const unauthorizedHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: err.name + ": " + err.message });
  }
};

export { unauthorizedHandler };
