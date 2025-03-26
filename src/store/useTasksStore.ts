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
  const showDoneTasks = ref<boolean>(false);

  const getFilteredTasks = computed(() => {
    let filteredTasks = tasks.value;

    if (showDoneTasks.value) {
      filteredTasks = tasks.value.filter((task) => !task.completed);
    } else {
      filteredTasks = tasks.value;
    }
    return sortByDate(
      searchByQuery(filteredTasks, searchQuery.value),
      sortAscending.value
    );
  });
  const toggleDoneTasks = () => {
    showDoneTasks.value = !showDoneTasks.value;
  };
  const toggleSort = () => {
    sortAscending.value = !sortAscending.value;
  };
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
    toggleDoneTasks,
    getFilteredTasks,
    sortAscending,
    searchQuery,
    showDoneTasks
  };
});
