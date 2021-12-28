import express, { Request, Response } from "express";
const router = express.Router();
const jwt = require("express-jwt");

const authenticationController = require("../controllers/authentication");
const projectController = require("../controllers/project");
const ticketController = require("../controllers/ticket");

const auth = jwt({
  secret: process.env.JWT_Secret,
  userProperty: "payload",
  algorithms: ["RS256"],
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

module.exports = router;
