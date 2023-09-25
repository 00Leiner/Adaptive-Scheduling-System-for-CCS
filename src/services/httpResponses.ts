import { Response } from "express";

// Helper function to send a JSON response with a status code and optional data
export function sendResponse(
  res: Response,
  statusCode: number,
  success: boolean,
  data?: any
) {
  const statusMessages: { [key: number]: string } = {
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
