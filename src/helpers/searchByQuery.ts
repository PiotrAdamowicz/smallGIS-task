import type { Task } from "../types/tasks";

export const searchByQuery = (tasks: Task[], query?: string): Task[] => {
  if (!query || query.length <= 0) return tasks;
  return tasks.filter((task) => {
    const title = task.title.toLowerCase();
    const description = task.description.toLowerCase();
    const lowerCaseQuery = query.toLowerCase().trim();
    return (
      title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery)
    );
  });
};
