import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");

const authenticationController = require("../controllers/authentication");

const auth = jwt({
  secret: process.env.JWT_Secret,
  userProperty: "payload",
  algorithms: ["RS256"],
});

router.post("/register", authenticationController.register);

router.post("/login", authenticationController.login);

router.get("/public-route", auth, (req: Request, res: Response) => {
  res.json({ data: "Hi from public route" });
});

module.exports = router;
