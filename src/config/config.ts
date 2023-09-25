import mongoose from "mongoose";

// const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
// const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.vlckshx.mongodb.net`;

// const SERVER_PORT = process.env.SERVER_PORT
//   ? Number(process.env.SERVER_PORT)
//   : 1337;

const MONGO_URL = "mongodb://0.0.0.0/adaptive-scheduling-system-db";
const SERVER_PORT = 3000;

// Create a variable to hold the MongoDB connection
const db = mongoose.connection;

// Listen for the "connected" event
db.once("connected", () => {
  console.log("Connected to MongoDB");
});

// Listen for the "error" event
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Listen for the "disconnected" event
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Connect to MongoDB
mongoose.connect(MONGO_URL);

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  Server: {
    port: SERVER_PORT,
  },
};
