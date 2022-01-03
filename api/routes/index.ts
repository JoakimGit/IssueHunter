import express, { Request, Response } from "express";
import jwt from "express-jwt";
const router = express.Router();

// IMPORT CONTROLLERS

import * as authenticationController from "../controllers/authentication";
import * as projectController from "../controllers/project";
import * as ticketController from "../controllers/ticket";
import * as userController from "../controllers/user";

const auth = jwt({
  secret: process.env.JWT_Secret as string,
  userProperty: "payload",
  algorithms: ["sha1", "RS256", "HS256"]
});

// AUTHENTICATION ROUTES
router.post("/register", authenticationController.register);
router.post("/login", authenticationController.login);

// PROJECT ROUTES
router.get("/projects", auth, projectController.getProjects);
router.get("/projects/:id", auth, projectController.getProjectById);
router.post("/projects", auth, projectController.createProject);
router.put("/projects/:id", auth, projectController.updateProject);
router.patch(
  "/projects/:id/add-user",
  auth,
  projectController.addMemberToProject
);

// TICKET ROUTES
router.get(
  "/projects/:id/tickets",
  auth,
  ticketController.getTicketsByProjectId
);
router.get("/tickets", auth, ticketController.getTickets);
router.get("/tickets/:id", auth, ticketController.getTicketById);
router.post("/tickets", auth, ticketController.createTicket);
router.put("/tickets/:id", auth, ticketController.updateTicket);

router.get("/public-route", auth, (req: Request, res: Response) => {
  res.json({ data: "Hi from public route" });
});

// USER ROUTES
router.get("/employees", auth, userController.getEmployees);

export default router;
