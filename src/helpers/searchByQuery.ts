import type { Task } from "../types/tasks";

export const searchByQuery = (tasks: Task[], query?: string): Task[] => {
  if (!query || query.length <= 0) return tasks;
  return tasks.filter(
    (task) => task.title.includes(query) || task.description.includes(query)
  );
};
