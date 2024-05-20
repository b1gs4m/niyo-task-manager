import { CreateTaskDto } from '@dtos/tasks.dto';
import { HttpException } from '@exceptions/HttpException';
import { Task } from '@interfaces/tasks.interface';
import taskModel from '@models/tasks.model';
import { isEmpty } from '@utils/util';

class TaskService {
  public tasks = taskModel;

  public async findAllTasks(): Promise<Task[]> {
    const tasks: Task[] = await this.tasks.find();
    return tasks;
  }

  public async findTaskById(taskId: string): Promise<Task> {
    if (isEmpty(taskId)) throw new HttpException(400, `TaskId is empty`);

    const findTask: Task = await this.tasks.findOne({ _id: taskId });
    if (!findTask) throw new HttpException(409, "Task doesn't exist");

    return findTask;
  }

  public async createTask(taskData: CreateTaskDto): Promise<Task> {
    if (isEmpty(taskData)) throw new HttpException(400, `taskData is empty`);

    const createTaskData: Task = await this.tasks.create(taskData);
    return createTaskData;
  }

  public async updateTask(taskId: string, taskData: CreateTaskDto): Promise<Task> {
    if (isEmpty(taskData)) throw new HttpException(400, `taskData is empty`);

    const updateTaskById: Task = await this.tasks.findByIdAndUpdate(taskId, taskData, { new: true });
    if (!updateTaskById) throw new HttpException(409, "Task doesn't exist");

    return updateTaskById;
  }

  public async deleteTask(taskId: string): Promise<Task> {
    const deleteTaskById: Task = await this.tasks.findByIdAndDelete(taskId);
    if (!deleteTaskById) throw new HttpException(409, "Task doesn't exist");

    return deleteTaskById;
  }
}

export default TaskService;
