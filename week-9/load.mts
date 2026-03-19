import { TaskManager } from "./src/models/TaskManager";

async function run() {
  const tm = new TaskManager();

  await tm.load("todo.json");

  console.log(tm.availableTasks());
}

run();