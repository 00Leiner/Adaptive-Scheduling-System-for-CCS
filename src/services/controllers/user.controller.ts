import { Request, Response } from 'express';
import { User } from '../models/user.model';

const users: User[] = [];

export const createUser = (req: Request, res: Response): void => {
  const { username, password, email } = req.body;
  const id = Math.random().toString(36).substring(7);
  const newUser: User = { id, username, password, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const getAllUsers = (res: Response): void => {
  res.status(200).json(users);
};