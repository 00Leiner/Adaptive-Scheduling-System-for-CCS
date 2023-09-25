import express, { Request, Response } from "express";
import { sendResponse } from "../services/httpResponses";

const app = express();

// Example route that sends a success response
app.get("/api/data", (req: Request, res: Response) => {
  const data = { message: "Data fetched successfully" };
  sendResponse(res, 200, true, data);
});

// Example route that sends a custom error response
app.get("/api/error", (req: Request, res: Response) => {
  sendResponse(res, 400, false);
});

// Example route that sends a not found response
app.get("/api/notfound", (req: Request, res: Response) => {
  sendResponse(res, 404, false);
});

// Example route that sends an internal server error response
app.get("/api/internalerror", (req: Request, res: Response) => {
  sendResponse(res, 500, false);
});
