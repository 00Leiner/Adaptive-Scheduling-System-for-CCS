"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const httpResponses_1 = require("../services/httpResponses");
const app = (0, express_1.default)();
app.get("/api/data", (req, res) => {
    const data = { message: "Data fetched successfully" };
    (0, httpResponses_1.sendResponse)(res, 200, true, data);
});
app.get("/api/error", (req, res) => {
    (0, httpResponses_1.sendResponse)(res, 400, false);
});
app.get("/api/notfound", (req, res) => {
    (0, httpResponses_1.sendResponse)(res, 404, false);
});
app.get("/api/internalerror", (req, res) => {
    (0, httpResponses_1.sendResponse)(res, 500, false);
});
//# sourceMappingURL=httpRoutes.js.map