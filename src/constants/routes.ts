import { Express } from "express";
import routeProgramBlock from "../routes/routes.ProgramBlock";

export default function routing(app: Express) {
  app.use("/Program.block", routeProgramBlock);
}