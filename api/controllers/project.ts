import { Request, Response } from "express";
import Project from "../models/project";

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find({
      company: req.payload.company
    }).populate("members");
    res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
  }
};

const getProjectById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
  }
};

const createProject = async (req: Request, res: Response) => {
  const project = new Project({ ...req.body });
  project.company = req.payload.company;
  project.members.push(req.payload._id);

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
  }
};

const updateProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, description, company, members, tickets } = req.body;

  try {
    let project = await Project.findById(id);

    if (!project) {
      res.status(404).json({ message: `No project exists with id: ${id}` });
      return;
    }
    project.name = name;
    project.description = description;
    project.company = company;
    project.members = members;
    project.tickets = tickets;

    const updatedProject = await project.save();
    res.status(201).json(updatedProject);
  } catch (error) {
    console.error(error);
  }
};

const addMemberToProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { members } = req.body;

  try {
    let project = await Project.findById(id);

    if (!project) {
      res.status(404).json({ message: `No project exists with id: ${id}` });
      return;
    }
    project.members = [...project.members, ...members];

    const updatedProject = await project.save();
    res.status(201).json(updatedProject);
  } catch (error) {
    console.error(error);
  }
};

export {
  getProjects,
  createProject,
  updateProject,
  getProjectById,
  addMemberToProject
};
