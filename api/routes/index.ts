import express, { Request, Response } from "express";
import jwt from "express-jwt";
const router = express.Router();

// IMPORT CONTROLLERS

import * as authenticationController from "../controllers/authentication";
import * as projectController from "../controllers/project";
import * as ticketController from "../controllers/ticket";

const auth = jwt({
  secret: process.env.JWT_Secret as string,
  userProperty: "payload",
  algorithms: ["sha1", "RS256", "HS256"]
});

// AUTHENTICATION ROUTES
router.post("/register", authenticationController.register);
router.post("/login", authenticationController.login);

// PROJECT ROUTES
router.get("/projects", projectController.getProjects);
router.post("/projects", projectController.createProject);
router.put("/projects/:id", projectController.updateProject);

// TICKET ROUTES
router.get("/tickets", ticketController.getTickets);
router.post("/tickets", ticketController.createTicket);
router.put("/tickets/:id", ticketController.updateTicket);

router.get("/public-route", auth, (req: Request, res: Response) => {
  res.json({ data: "Hi from public route" });
});

export default router;
