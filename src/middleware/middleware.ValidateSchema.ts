import joi, { ObjectSchema } from "joi";
import { NextFunction, Response, Request } from "express";
import { IProgramBlock } from "../models/model.ProgramBlock";
import { ISchedule } from "../models/model.schedule";

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
    Schedule: {
      create: joi.object<ISchedule>({
          program: joi.string().regex(/^[A-F]{10}$/).trim().required(),
          block: joi.string().regex(/^[1-4a-fA-F]{2}$/).trim().required(),
          courses: {
          courseDetails: {
            classCode: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
            courseCode: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
            courseDescription: joi.string().regex(/^[1-4a-fA-F]{55}$/).required(),
            courseUnit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
            day: joi.string().regex(/^[0-9]{10}$/).required(),
            time: joi.string().regex(/^[0-9a-z]{6}$/).required(),
            room: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
            instructor: joi.string().regex(/^[a-fA-F]{55}$/).required(),
          }}
      }),
      update: joi.object<ISchedule>({
        program: joi.string().regex(/^[A-F]{10}$/).trim().required(),
        block: joi.string().regex(/^[1-4a-fA-F]{2}$/).trim().required(),
        courses: {
        courseDetails: {
          classCode: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
          courseCode: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
          courseDescription: joi.string().regex(/^[1-4a-fA-F]{55}$/).required(),
          courseUnit: joi.string().regex(/^[1-9]{2}$/).trim().required(),
          day: joi.string().regex(/^[0-9]{10}$/).required(),
          time: joi.string().regex(/^[0-9a-z]{6}$/).required(),
          room: joi.string().regex(/^[1-9a-fA-F]{20}$/).required(),
          instructor: joi.string().regex(/^[a-fA-F]{55}$/).required(),
        }}
    }),
  }
  };