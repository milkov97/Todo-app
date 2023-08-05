import { validationResult } from 'express-validator';
import { AppDataSource } from '../../index';
import { Task } from './tasks.entity';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Response, Request } from 'express';
import { UpdateResult } from 'typeorm';

class TaskController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    // Declare a variable to hold all tasks
    let allTasks: Task[];
    // Fetch all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: {
          date: 'ASC',
        },
      });
      // Convert the task instance to an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (_errors) {
      return res.json({ error: 'Internal Server Error' }).status(500);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newTask = new Task();

    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;

    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(Task).save(newTask);

      createdTask = instanceToPlain(createdTask) as Task;

      return res.json(createdTask).status(201);
    } catch (errors) {
      return res.json({ error: 'Internal Server Error' }).status(500);
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Find task in database
    let task: Task | null;

    try {
      task = await AppDataSource.getRepository(Task).findOne({
        where: { id: req.body.id },
      });
    } catch (errors) {
      return res.json({ error: 'Internal Server Error' }).status(500);
    }

    if (!task) {
      return res.status(404).json({
        error: 'The task with given id does not exist',
      });
    }

    let updatedTask: UpdateResult;

    try {
      updatedTask = await AppDataSource.getRepository(Task).update(
        req.body.id,
        plainToInstance(Task, { status: req.body.status }),
      );
      updatedTask = instanceToPlain(updatedTask) as UpdateResult;
      return res.json(updatedTask).status(200)
    } catch (errors) {
      return res.json({ error: 'Internal Server Error' }).status(500);
    }
  }
}

export const taskController = new TaskController();
