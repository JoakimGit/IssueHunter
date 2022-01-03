import { Request, Response } from "express";
import passport from "passport";
import User from "../models/user";
import Company from "../models/company";

const register = async (req: Request, res: Response) => {
  const { email, name, role, company, password, isNewCompany } = req.body;
  const user = new User({ email, name, role, company });

  user.setPassword(password);

  if (isNewCompany) {
    const newCompany = new Company({ name: company });
    newCompany.members.push(user);
    try {
      const savedCompany = await newCompany.save();
    } catch (error) {
      console.error(error);
    }
  }

  try {
    const newUser = await user.save();
    const token = newUser.generateJwt();
    res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req: Request, res: Response) => {
  passport.authenticate("local", (err: Error, user: any, info: any) => {
    if (err) {
      res.status(404).json(err);
      return;
    }

    if (user) {
      const token = user.generateJwt();
      res.status(200).json({ token: token });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};

export { register, login };
