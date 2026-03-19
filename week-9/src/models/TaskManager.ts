import { Task, type STask } from "./Task";
import { readFile, writeFile } from "fs/promises";

interface TaskManagerActions {
  load: (filename: string) => Promise<void>;
  save: (filename: string) => Promise<void>;
  addTask: (title: string) => number;
  findTask: (id: number) => Task | null;
  closeTask: (id: number) => void;

  availableTasks: () => Task[];
}

export class TaskManager implements TaskManagerActions {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string): number {
    const task = new Task(this.nextId++, title);
    this.tasks.push(task);
    return task.id;
  }

  findTask(id: number): Task | null {
    return this.tasks.find((t) => t.id === id) ?? null;
  }

  closeTask(id: number): void {
    const task = this.findTask(id);
    if (task) {
      task.close();
    }
  }

  availableTasks(): Task[] {
    return this.tasks.filter((t) => !t.isComplete());
  }

  async save(filename: string): Promise<void> {
    const json = JSON.stringify(this.tasks, null, 2);
    await writeFile(filename, json, "utf-8");
  }

  async load(filename: string): Promise<void> {
    const raw = await readFile(filename, "utf-8");
    const data: STask[] = JSON.parse(raw);

    this.tasks = data.map((item) => Task.fromSTask(item));

    const maxId = this.tasks.reduce((max, t) => Math.max(max, t.id), 0);
    this.nextId = maxId + 1;
  }
}