import express from "express";
import jwt from "express-jwt";
const router = express.Router();

// IMPORT CONTROLLERS

import * as authenticationController from "../controllers/authentication";
import * as projectController from "../controllers/project";
import * as ticketController from "../controllers/ticket";
import * as userController from "../controllers/user";

const auth = jwt({
  secret: process.env.JWT_SECRET as string,
  userProperty: "payload",
  algorithms: ["sha1", "RS256", "HS256"]
});

// AUTHENTICATION ROUTES
router.post("/register", authenticationController.register);
router.post("/login", authenticationController.login);
router.post("/guestlogin", authenticationController.guestLogin);

// PROJECT ROUTES
router.get("/projects", auth, projectController.getProjects);
router.get("/projects/:id", auth, projectController.getProjectById);
router.get("/projects/:id/members", auth, projectController.getProjectMembers);
router.post("/projects", auth, projectController.createProject);
router.put("/projects/:id", auth, projectController.updateProject);
router.patch("/projects/:id/add-user", auth, projectController.addMemberToProject);

// TICKET ROUTES
router.get("/projects/:id/tickets", auth, ticketController.getTicketsByProjectId);
router.get("/tickets", auth, ticketController.getTickets);
router.get("/tickets/:id", auth, ticketController.getTicketById);
router.get("/tickets/user/:id", auth, ticketController.getTicketsByUserId);
router.post("/tickets", auth, ticketController.createTicket);
router.put("/tickets/:id", auth, ticketController.updateTicket);
router.post("/tickets/:id/comments", auth, ticketController.addComment);

// USER ROUTES
router.get("/people", auth, userController.getEmployees);
router.get("/people/email/:email", auth, userController.getUserByEmail);
router.patch("/people/:id", auth, userController.updateUserRole);
router.post("/company/members", auth, userController.addUserToCompany);
router.delete("/company/members/:id", auth, userController.removeUserFromCompany); // prettier-ignore

export default router;
