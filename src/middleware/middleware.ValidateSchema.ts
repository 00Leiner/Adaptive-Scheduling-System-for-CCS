import joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import { IProgramBlock } from "../models/model.ProgramBlock";

export const ValidateSchema = (Schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await Schema.validateAsync(req.body);
        next();
      } catch (error) {
        res.status(422).json({ error });
      }
    };
  };

  export const Schemas = {
    ProgramBlock: {
        create: joi.object<IProgramBlock>({
            program: joi.string().regex(/^[A-F]{10}$/).trim().required(),
            block: joi.string().regex(/^[1-4a-fA-F]{2}$/).trim().required(),
            courses: {
            courseDetails: {
                code: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
                description: joi.string().regex(/^[1-4a-fA-F]{55}$/).required(),
                unit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
            }}
        }),
        update: joi.object<IProgramBlock>({
            program: joi.string().regex(/^[A-F]{10}$/).trim().required(),
            block: joi.string().regex(/^[1-4a-fA-F]{2}$/).trim().required(),
            courses: {
            courseDetails: {
                code: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
                description: joi.string().regex(/^[1-4a-fA-F]{55}$/).required(),
                unit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
            }}
        })
    },
  };