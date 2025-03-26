import type { Task } from "../types/tasks";

export const sortByDate = (items: Task[], ascending: boolean): Task[] => {
  return items.sort((a, b) => {
    const timeA = a.created.getTime();
    const timeB = b.created.getTime();
    if (ascending) {
      return timeA - timeB;
    } else {
      return timeB - timeA;
    }
  });
};
