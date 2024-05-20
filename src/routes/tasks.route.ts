import { Router } from 'express';
import TasksController from '@controllers/tasks.controller';
import { CreateTaskDto } from '@dtos/tasks.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class TasksRoute implements Routes {
  public path = '/tasks';
  public router = Router();
  public tasksController = new TasksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tasksController.getTasks);
    this.router.get(`${this.path}/:id`, this.tasksController.getTaskById);
    this.router.post(`${this.path}`, validationMiddleware(CreateTaskDto, 'body'), this.tasksController.createTask);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateTaskDto, 'body', true), this.tasksController.updateTask);
    this.router.delete(`${this.path}/:id`, this.tasksController.deleteTask);
  }
}

export default TasksRoute;
