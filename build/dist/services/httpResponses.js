"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
function sendResponse(res, statusCode, success, data) {
    const statusMessages = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error",
    };
    const message = statusMessages[statusCode] || "Unknown Status";
    const response = {
        success,
        message,
        data,
    };
    res.status(statusCode).json(response);
}
exports.sendResponse = sendResponse;
//# sourceMappingURL=httpResponses.js.map