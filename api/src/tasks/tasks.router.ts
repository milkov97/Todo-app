import { Router, Request, Response } from 'express';
import { TaskController } from './task.controller';


export const tasksRouter: Router = Router();


tasksRouter.get('/tasks', (req: Request, res: Response) => {
  const taskController = new TaskController()
  taskController.getAll();
});
