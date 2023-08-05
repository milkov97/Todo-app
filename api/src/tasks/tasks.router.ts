import { Router } from 'express';
import { taskController } from './task.controller';
import { createValidator } from './tasks.validator';


export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', taskController.getAll);

tasksRouter.post('/tasks', createValidator, taskController.create);
