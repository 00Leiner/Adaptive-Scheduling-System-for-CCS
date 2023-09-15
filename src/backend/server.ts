import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";
import { error } from "console";
import Logging from "./library/Logging";

const router = express();

/** connect to mongo */
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    Logging.info("Connected to mongoDB. ");
  })
  .catch((error) => {
    Logging.error("Unable to connect: ");
    Logging.error(error);
  });
