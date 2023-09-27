import { Response, Request, NextFunction } from "express";

const ReadProgramBlockController = (req: Request, res: Response) => {
    const { program, block } = req.params;
    res.send(`${program} ${block}`);
  };

  export default {
    ReadProgramBlockController
  };
