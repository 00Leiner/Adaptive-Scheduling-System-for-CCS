import express from "express";
import serverErrorHandling from "./services.ServerErrorHandling";
import logReqRes from "./services.Logging";
import http from "http";
import { config } from "../config/config.mongodb";
import routing from "../constants/routes";

const app = express();

const StartServer = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  routing(app); //all routes contain here
  app.use(logReqRes); // logging
  app.use(serverErrorHandling); // error handling

  http.createServer(app).listen(config.Server.port, () =>
    console.info(`Server is running on port ${config.Server.port}.`)
  );
};

export default StartServer;


