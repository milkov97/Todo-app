import { Router, Request, Response } from 'express';
import { TaskController } from './task.controller';
import { createValidator } from './tasks.validator';
import { validationResult } from 'express-validator';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', async (req: Request, res: Response) => {
  const taskController = new TaskController();
  const allTasks = await taskController.getAll();
  res.json(allTasks).status(200);
});

tasksRouter.post('/tasks', createValidator, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});
