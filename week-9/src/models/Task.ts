export interface ITask {
  title: string;
  complete: boolean;
  id: number;
  createdAt: Date;
}

export type STask = Omit<ITask, 'createdAt'> & { createdAt: string };

export interface TaskActions {
  close: () => void;
  isComplete: () => boolean;
}

export class Task implements ITask, TaskActions {
  public id: number;
  public title: string;
  public complete: boolean;
  public createdAt: Date;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.complete = false;
    this.createdAt = new Date();
  }

  close(): void {
    this.complete = true;
  }

  isComplete(): boolean {
    return this.complete;
  }

  toJSON(): STask {
    return {
      id: this.id,
      title: this.title,
      complete: this.complete,
      createdAt: this.createdAt.toUTCString(),
    };
  }

  static fromSTask(data: STask): Task {
    const task = new Task(data.id, data.title);
    task.complete = data.complete;
    task.createdAt = new Date(data.createdAt);
    return task;
  }
}