import { Request, Response } from 'express';
import { Schedule } from '../models/schedule.model';

const schedules: Schedule[] = [];

export const createSchedule = (req: Request, res: Response): void => {
  const { title, description, date, userId } = req.body;
  const id = Math.random().toString(36).substring(7);
  const newSchedule: Schedule = { id, title, description, date, userId };
  schedules.push(newSchedule);
  res.status(201).json(newSchedule);
};

export const getAllSchedules = (res: Response): void => {
  res.status(200).json(schedules);
};