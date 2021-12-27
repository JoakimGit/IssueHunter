require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
const app = express();
const passport = require("passport");
const routesApi = require("./api/routes");
const connectDB = require("./api/config/database.config");
const cors = require("cors");
const { unauthorizedHandler } = require("./api/middleware/unauthorizedHandler");
require("./api/models/user");
require("./api/config/passport");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use("/api", routesApi);
// app.use(unauthorizedHandler);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: err.name + ": " + err.message });
  }
});

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("It works");
});

app
  .listen(PORT, () => {
    console.log(`express is listening on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
  });
