import { Request, Response } from "express";
const Project = require("../models/project");

const getProjects = async (req: Request, res: Response) => {
  
  try {
    const projects = await Project.find();
    res.status(200).json({ data: projects });
  } catch (error) {
    console.error(error);
  }
};

const createProject = async (req: Request, res: Response) => {
  const { name, description, members, company } = req.body;
  const project = new Project();

  project.name = name;
  project.description = description;
  project.members = members;
  project.company = company;

  try {
    const newProject = await project.save();
    res.status(201);
  } catch (error) {
    console.error(error);
  }
};

const updateProject = async (req: Request, res: Response) => {
  const { name, description, members, company } = req.body;
  const project = new Project();

  project.name = name;
  project.description = description;
  project.members = members;
  project.company = company;

  try {
    const newProject = await project.save();
    res.status(201).json({ data:newProject});
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getProjects, createProject, updateProject };