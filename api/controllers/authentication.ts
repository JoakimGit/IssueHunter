import { Request, Response } from "express";
const User = require("../models/user");
const passport = require("passport");

const register = async (req: Request, res: Response) => {
  const { email, name, role, company, password } = req.body;
  const user = new User();

  user.name = name;
  user.email = email;
  user.role = role;
  user.company = company;

  user.setPassword(password);

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

module.exports = { register, login };
