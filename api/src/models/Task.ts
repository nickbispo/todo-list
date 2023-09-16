import { Model, Schema, connection, model } from "mongoose";
import { Task } from "../interfaces/task.interface";

const schema = new Schema<Task>({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  category: {
    ref: "Category",
    required: true,
  },
});

const name = "Task";

export default connection && connection.models[name]
  ? (connection.models[name] as Model<Task>)
  : model<Task>(name, schema);
