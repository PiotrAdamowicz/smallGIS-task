import { defineStore } from "pinia";
import { ref } from "vue";

enum CompletedTask {
  done,
  notDone,
  inProgress
}

interface Task {
  id: number;
  title: string;
  created: Date;
  description: string;
  completed: CompletedTask;
}

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<Task[]>([
    {
      id: 1,
      title: "Task 1",
      created: new Date(),
      description: "This is task 1",
      completed: CompletedTask.notDone
    },
    {
      id: 2,
      title: "Task 2",
      created: new Date(),
      description: "This is task 2",
      completed: CompletedTask.inProgress
    },
    {
      id: 3,
      title: "Task 3",
      created: new Date(),
      description: "This is task 3",
      completed: CompletedTask.done
    }
  ]);
  return { tasks };
});
