import joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import Logging from "./logging";

// Define validation middleware
export const validateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      Logging.error(error);
      res.status(422).json({ error });
    }
  };
};

// Define schemas for ProgramBlock
export const Schemas = {
  programBlock: {
    create: joi.object({
      program: joi.string().required(),
      block: joi.string().required(),
      courses: joi
        .array()
        .items(
          joi.object({
            courseDetails: joi.object({
              code: joi.string().required(),
              description: joi.string().required(),
              unit: joi.string().required(),
            }),
          })
        )
        .required(),
    }),

    update: joi.object({
      program: joi.string().required(),
      block: joi.string().required(),
      courses: joi
        .array()
        .items(
          joi.object({
            courseDetails: joi.object({
              code: joi.string().required(),
              description: joi.string().required(),
              unit: joi.string().required(),
            }),
          })
        )
        .required(),
    }),
  },
};
