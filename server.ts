require("dotenv").config();
import express, { Request, Response } from "express";
const app = express();
const connectDB = require("./api/config/database.config");

connectDB();

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
