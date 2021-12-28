import { Request, Response } from "express";
const Ticket = require("../models/ticket");

const getTickets = async (req: Request, res: Response) => {
  
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ data: tickets });
  } catch (error) {
    console.error(error);
  }
};

const createTicket = async (req: Request, res: Response) => {
  const { name, description, status, priority, createdBy, assignedTo } = req.body;
  const ticket = new Ticket();

  ticket.name = name;
  ticket.description = description;
  ticket.status = status;
  ticket.priority = priority;
  ticket.createdBy = createdBy;
  ticket.assignedTo = assignedTo;

  try {
    const newticket = await ticket.save();
    res.status(201);
  } catch (error) {
    console.error(error);
  }
};

const updateTicket = async (req: Request, res: Response) => {
  const { name, description, status, priority, createdBy, assignedTo } = req.body;
  const ticket = new Ticket();

  ticket.name = name;
  ticket.description = description;
  ticket.status = status;
  ticket.priority = priority;
  ticket.createdBy = createdBy;
  ticket.assignedTo = assignedTo;

  try {
    const newTicket = await ticket.save();
    res.status(201).json({data: newTicket});
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getTickets, createTicket, updateTicket };