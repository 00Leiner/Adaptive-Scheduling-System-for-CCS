import { Response, Request, NextFunction } from "express";

const logReqRes = (req:Request, res:Response, next:NextFunction) => {
    /** log the request */
    console.info(
      `Incomming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    /** log the response */
    res.on("finish", () => {
      console.info(
        `Incomming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      );
    });
    next();
  };

export default logReqRes;