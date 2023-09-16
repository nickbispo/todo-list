
export interface Task {
  title: string;
  done: boolean;
  createdAt: Date;
  category: {
    ref: string;
  };
}