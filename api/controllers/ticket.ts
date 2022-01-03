import { Request, Response } from "express";
import Project from "../models/project";
import Ticket from "../models/ticket";

const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ data: tickets });
  } catch (error) {
    console.error(error);
  }
};

const getTicketsByProjectId = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id).populate("tickets");
    if (project) {
      res.status(200).json({ tickets: project.tickets });
    } else {
      res.status(404).json({ msg: `No project with id ${req.params.id}` });
    }
  } catch (error) {
    console.error(error);
  }
};

const getTicketById = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ msg: `No ticket with id ${req.params.id}` });
    }
  } catch (error) {
    console.error(error);
  }
};

const createTicket = async (req: Request, res: Response) => {
  const { projectId, ...rest } = req.body;
  const ticket = new Ticket(rest);
  ticket.submitter = req.payload._id;

  if (projectId) {
    try {
      const project = await Project.findById(projectId);
      if (project) {
        project.tickets.push(ticket);
        const newTicket = await ticket.save();
        const savedProject = await project.save();
        res.status(201).json(newTicket);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const updateTicket = async (req: Request, res: Response) => {
  const id = req.params.id;
  const {
    name,
    description,
    priority,
    status,
    type,
    assignedTo,
    submitter,
    dueDate,
    comments
  } = req.body;

  try {
    let ticket = await Ticket.findById(id);

    if (!ticket) {
      res.status(404).json({ msg: `No project exists with id: ${id}` });
      return;
    }
    ticket.name = name;
    ticket.description = description;
    ticket.priority = priority;
    ticket.status = status;
    ticket.type = type;
    ticket.assignedTo = assignedTo;
    ticket.submitter = submitter;
    ticket.dueDate = dueDate;
    // ticket.comments = comments;

    const updatedTicket = await ticket.save();
    res.status(201).json(updatedTicket);
  } catch (error) {
    console.error(error);
  }
};

export {
  getTickets,
  createTicket,
  updateTicket,
  getTicketsByProjectId,
  getTicketById
};
