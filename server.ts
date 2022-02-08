require("dotenv").config();
import express from "express";
const app = express();
import passport from "passport";
import routesApi from "./api/routes";
import connectDB from "./api/config/database.config";
import cors from "cors";
import path from "path";
import { unauthorizedHandler } from "./api/middleware/unauthorizedHandler";
require("./api/models/user");
require("./api/config/passport");

connectDB();

const frontendDist = path.join(__dirname, "..", "frontend", "dist");
console.log(frontendDist);
app.use(express.static(frontendDist));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use("/api", routesApi);
app.use(unauthorizedHandler);

const PORT = process.env.PORT || 8080;

app
  .listen(PORT, () => {
    console.log(`express is listening on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
  });
