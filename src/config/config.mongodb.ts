import dontenv from "dotenv";

dontenv.config();

const MONGO_URL = process.env.MONGO_URL;

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 1337;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  Server: {
    port: SERVER_PORT,
  },
};