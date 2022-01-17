import { Request, Response } from "express";
import Company from "../models/company";
import User from "../models/user";
import { Types } from "mongoose";
import { UserRole } from "../enums/user";

const getEmployees = async (req: Request, res: Response) => {
  try {
    const company = await Company.findOne({
      name: req.payload.company
    }).populate("members");

    res.status(200).json(company);
  } catch (error) {
    console.error(error);
  }
};

const getUserByEmail = async (req: Request, res: Response) => {
  const email = req.params.email;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: `Could not find a user with email ${email}` });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

const updateUserRole = async (req: Request, res: Response) => {
  const role = req.body.role;
  const userId = req.params.id;

  if (!role && !userId) {
    return res.status(400).json({ message: "Role or id missing" });
  }
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `Could not find a user with id ${userId}` });
    }
    user.role = role;
    await user.save();
    res.status(200).json();
  } catch (error) {
    console.error(error);
  }
};

const addUserToCompany = async (req: Request, res: Response) => {
  const { userId, role } = req.body;
  const companyName = req.payload.company;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `Could not find a user with id ${userId}` });
    }
    const company = await Company.findOne({ name: companyName });

    if (!company) {
      return res
        .status(404)
        .json({ message: `Could not find a company called ${companyName}` });
    }
    company.members.push(user);
    user.company = company.name;
    user.role = role;
    await company.save();
    await user.save();
    res.status(200).json();
  } catch (error) {
    console.error(error);
  }
};

const removeUserFromCompany = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const companyName = req.payload.company;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: `Could not find a user with id ${userId}` });
    }

    const company = await Company.findOne({ name: companyName });
    if (!company) {
      return res
        .status(404)
        .json({ message: `Could not find a company called ${companyName}` });
    }
    const companyMembers = company.members as Types.DocumentArray<typeof User>;
    companyMembers.pull(user._id);
    user.company = "";
    user.role = UserRole.USER;
    await company.save();
    await user.save();
    res.status(200).json();
  } catch (error) {
    console.error(error);
  }
};

export {
  getEmployees,
  getUserByEmail,
  updateUserRole,
  addUserToCompany,
  removeUserFromCompany
};
