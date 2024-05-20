import { model, Schema, Document } from 'mongoose';
import { Task } from '@interfaces/tasks.interface';

const taskschema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo',
  },
});

const userModel = model<Task & Document>('User', taskschema);

export default userModel;
