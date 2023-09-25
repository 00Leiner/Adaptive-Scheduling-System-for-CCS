"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = "mongodb://0.0.0.0/adaptive-scheduling-system-db";
const SERVER_PORT = 3000;
const db = mongoose_1.default.connection;
db.once("connected", () => {
    console.log("Connected to MongoDB");
});
db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});
db.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});
mongoose_1.default.connect(MONGO_URL);
exports.config = {
    mongo: {
        url: MONGO_URL,
    },
    Server: {
        port: SERVER_PORT,
    },
};
//# sourceMappingURL=config.js.map