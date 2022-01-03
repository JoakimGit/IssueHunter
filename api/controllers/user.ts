import { Request, Response } from "express";
import Company from "../models/company";
import User from "../models/user";

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

export { getEmployees };
