import { Request, Response } from "express";
import Project from "../models/project";
import Ticket, { Comment } from "../models/ticket";
import { Types } from "mongoose";

const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ data: tickets });
  } catch (error) {
    console.error(error);
  }
};

const getTicketsByUserId = async (req: Request, res: Response) => {
  const userId = req.payload._id;

  try {
    const tickets = await Ticket.find({ assignedTo: userId }).populate("assignedTo");
    res.status(200).json({ tickets: tickets });
  } catch (error) {
    console.error(error);
  }
};

const getTicketsByProjectId = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id).populate({
      path: "tickets",
      populate: { path: "assignedTo", select: ["_id", "name"] }
    });

    if (project) {
      res.status(200).json({ tickets: project.tickets });
    } else {
      res.status(404).json({ message: `No project with id ${req.params.id}` });
    }
  } catch (error) {
    console.error(error);
  }
};

const getTicketById = async (req: Request, res: Response) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (ticket) {
      await Comment.populate(ticket.comments, { path: "postedBy" });
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ message: `No ticket with id ${req.params.id}` });
    }
  } catch (error) {
    console.error(error);
  }
};

const createTicket = async (req: Request, res: Response) => {
  const { projectId, ...rest } = req.body;

  Object.keys(rest).forEach((key) => {
    if (!rest[key]) {
      delete rest[key];
    }
  });

  const ticket = new Ticket(rest);
  ticket.project = projectId;
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
  const { name, description, priority, status, type, assignedTo, dueDate } = req.body;

  try {
    let ticket = await Ticket.findById(id);

    if (!ticket) {
      res.status(404).json({ message: `No Ticket exists with id: ${id}` });
      return;
    }
    name ? (ticket.name = name) : null;
    description ? (ticket.description = description) : null;
    priority ? (ticket.priority = priority) : null;
    status ? (ticket.status = status) : null;
    type ? (ticket.type = type) : null;
    assignedTo ? (ticket.assignedTo = assignedTo) : null;
    dueDate ? (ticket.dueDate = dueDate) : null;

    const updatedTicket = await ticket.save();
    res.status(201).json(updatedTicket);
  } catch (error) {
    console.error(error);
  }
};

const addComment = async (req: Request, res: Response) => {
  const id = req.params.id;
  const commentContent = req.body.content;

  try {
    let ticket = await Ticket.findById(id);

    if (!ticket) {
      res.status(404).json({ message: `No Ticket exists with id: ${id}` });
      return;
    }

    const comment = new Comment();
    comment.content = commentContent;
    comment.postedBy = req.payload._id;
    ticket.comments.push(comment);

    const updatedTicket = await ticket.save();
    const newComment = updatedTicket.comments.at(-1);
    await Comment.populate(newComment, { path: "postedBy" });

    res.status(201).json({ comment: newComment });
  } catch (error) {
    console.error(error);
  }
};

export {
  getTickets,
  getTicketsByUserId,
  createTicket,
  updateTicket,
  getTicketsByProjectId,
  getTicketById,
  addComment
};
