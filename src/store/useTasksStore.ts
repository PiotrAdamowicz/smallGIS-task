import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Task } from "../types/tasks";
import { sortByDate } from "../helpers/sortTasks";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<Task[]>([
    {
      id: "1",
      title: "Task 1",
      created: new Date("2022-03-01"),
      description: "This is task 1",
      completed: false
    },
    {
      id: "3",
      title: "Task 3",
      created: new Date(),
      description:
        "This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 This is task 3 ",
      completed: false
    },
    {
      id: "2",
      title: "Task 2",
      created: new Date("2023-09-01"),
      description: "This is task 2",
      completed: true
    }
  ]);
  const sortAscending = ref<boolean>(false);
  const toggleSort = () => {
    sortAscending.value = !sortAscending.value;
  };
  const getAllTasks = computed(() =>
    sortByDate(tasks.value, sortAscending.value)
  );
  const getNotDone = computed(() => {
    const filteredTakss = tasks.value.filter((task) => !task.completed);
    return sortByDate(filteredTakss, sortAscending.value);
  });

  const addTask = (task: Task) => {
    tasks.value.push(task);
  };
  const removeTask = (id: string) => {
    const index = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(index, 1);
  };
  return {
    tasks,
    addTask,
    removeTask,
    toggleSort,
    getNotDone,
    getAllTasks,
    sortAscending
  };
});
