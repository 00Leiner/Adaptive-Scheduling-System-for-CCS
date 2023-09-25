import express from "express";
import http from "http";
import mongoose from "mongoose";
import Logging from "./services/logging";
import programBlockRoutes from "./routes/RESTfulroutes"; // Import your ProgramBlock routes
import { config } from "./config/config";

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connected to MongoDB.");
    startServer();
  })
  .catch((error) => {
    Logging.error("Unable to connect to MongoDB:");
    Logging.error(error);
  });

// Start the server after MongoDB connection
const startServer = () => {
  // Middleware to log requests and responses
  app.use((req, res, next) => {
    Logging.info(
      `Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    res.on("finish", () => {
      Logging.info(
        `Outgoing -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      );
    });
    next();
  });

  // Body parsing middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // CORS headers
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
      res.status(200).json({});
    }
    next();
  });

  // Define your ProgramBlock routes
  app.use("/programblocks", programBlockRoutes);

  // Health check endpoint
  app.get("/ping", (req, res) => res.status(200).json({ message: "pong" }));

  // Error handling middleware
  app.use((req, res, next) => {
    const error = new Error("Not found");
    Logging.error(error);
    res.status(404).json({ message: error.message });
  });

  // Start the server
  server.listen(config.Server.port, () => {
    Logging.info(`Server is running on port ${config.Server.port}.`);
  });
};
