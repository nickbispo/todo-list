import { Types } from "mongoose";

export interface Task {
  title: string;
  done: boolean;
  createdAt: Date;
  category: {
    type: Types.ObjectId,
    ref: string;
  };
}