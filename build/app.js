"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_ProgramBlock_1 = __importDefault(require("./routes/routes.ProgramBlock"));
const config_mongodb_1 = require("./config/config.mongodb");
const app = (0, express_1.default)();
app.use(express_1.default.json());
/** routes */
app.use('/Program.block', routes_ProgramBlock_1.default); //use program block routes
// Start the Express server
app.listen(config_mongodb_1.config.Server.port, () => {
    console.log(`Server is running on port ${config_mongodb_1.config.Server.port}`);
});
