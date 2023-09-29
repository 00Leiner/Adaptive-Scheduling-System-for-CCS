import { Response, Request } from "express";

const serverErrorHandling = (req: Request, res: Response) => {
    const error = new Error(" Not found");
    console.error(error);
    return res.status(404).json({ message: error.message });
  };
  
export default serverErrorHandling;