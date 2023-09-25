"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const logging_1 = __importDefault(require("./services/logging"));
const RESTfulroutes_1 = __importDefault(require("./routes/RESTfulroutes"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: "majority" })
    .then(() => {
    logging_1.default.info("Connected to MongoDB.");
    startServer();
})
    .catch((error) => {
    logging_1.default.error("Unable to connect to MongoDB:");
    logging_1.default.error(error);
});
const startServer = () => {
    app.use((req, res, next) => {
        logging_1.default.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on("finish", () => {
            logging_1.default.info(`Outgoing -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });
        next();
    });
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            res.status(200).json({});
        }
        next();
    });
    app.use("/programblocks", RESTfulroutes_1.default);
    app.get("/ping", (req, res) => res.status(200).json({ message: "pong" }));
    app.use((req, res, next) => {
        const error = new Error("Not found");
        logging_1.default.error(error);
        res.status(404).json({ message: error.message });
    });
    server.listen(config_1.config.Server.port, () => {
        logging_1.default.info(`Server is running on port ${config_1.config.Server.port}.`);
    });
};
//# sourceMappingURL=app.js.map