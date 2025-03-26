import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Task } from "../types/tasks";
import { sortByDate } from "../helpers/sortTasks";
import { tasksData } from "../utils/data";
import { searchByQuery } from "../helpers/searchByQuery";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<Task[]>(tasksData);
  const sortAscending = ref<boolean>(false);
  const searchQuery = ref<string>();
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
  const getFilteredTasks = computed(() => {
    let filteredTasks = tasks.value;
    return (showNotDone: boolean) => {
      if (showNotDone) {
        filteredTasks = tasks.value.filter((task) => !task.completed);
      } else {
        filteredTasks = tasks.value;
      }
      return sortByDate(
        searchByQuery(filteredTasks, searchQuery.value),
        sortAscending.value
      );
    };
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
    getFilteredTasks,
    sortAscending,
    searchQuery
  };
});
