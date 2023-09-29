import { config } from "./config/config.mongodb";
import mongoose from 'mongoose';
import StartServer from './services/services.StartServer';

/** connect to mongo */
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.info("Connected to mongoDB. ");
    StartServer(); // Call the StartServer function to start the server
  })
  .catch((error) => {
    console.error("Unable to connect: ");
    console.error(error);
  });
