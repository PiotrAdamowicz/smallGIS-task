import { setActivePinia, createPinia } from "pinia";
import { useTasksStore } from "../src/store/useTasksStore";
import { describe, beforeEach, it, expect } from "vitest";
import { uid } from "../src/utils/uid.ts";
import { searchByQuery } from "../src/helpers/searchByQuery";
import { sortByDate } from "../src/helpers/sortTasks";

const newTask = {
  id: uid(),
  title: "Task " + Math.random(),
  created: new Date(),
  description: "This is test task",
  completed: false
};

describe("Use Tasks Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Begin with 10 tasks", () => {
    const store = useTasksStore();
    expect(store.tasks).toHaveLength(10);
  });

  it("Toggle sorting state", () => {
    const store = useTasksStore();
    const CURRENT = store.sortAscending;
    const EXPECTED = !store.sortAscending;

    expect(store.sortAscending).toBe(CURRENT);
    store.toggleSort();
    expect(store.sortAscending).toBe(EXPECTED);
  });

  it("Search by query", () => {
    const store = useTasksStore();
    const TASKS = store.tasks;
    const QUERY = "Blue";

    expect(searchByQuery(TASKS, QUERY)).toHaveLength(2);
    expect(searchByQuery(TASKS, "")).toHaveLength(10);
    expect(searchByQuery(TASKS, "random query adnasidnasldi")).toHaveLength(0);
  });

  it("Sort tasks by date ascending", () => {
    const store = useTasksStore();
    const TASKS = store.tasks;
    const SORTED_TASK_DATE = sortByDate(TASKS, true)[0].created;

    expect(SORTED_TASK_DATE).toEqual(new Date("2020-01-01"));
  });

  it("Sort tasks by date descending", () => {
    const store = useTasksStore();
    const TASKS = store.tasks;
    const SORTED_TASK_DATE = sortByDate(TASKS, false)[0].created;

    expect(SORTED_TASK_DATE).toEqual(new Date("2025-03-03"));
  });

  it("Filter tasks by 'Not Done' status", () => {
    const store = useTasksStore();

    const FILTERED_TASKS = store.getFilteredTasks(true);
    expect(FILTERED_TASKS).toHaveLength(8);
  });

  it("Filter tasks by 'Done' status", () => {
    const store = useTasksStore();

    const FILTERED_TASKS = store.getFilteredTasks(false);
    expect(FILTERED_TASKS).toHaveLength(10);
  });
  it("Add task", () => {
    const store = useTasksStore();
    const LENGTH = store.tasks.length;
    const EXPECTED = store.tasks.length + 1;

    expect(store.tasks).toHaveLength(LENGTH);
    store.addTask(newTask);
    expect(store.tasks).toHaveLength(EXPECTED);
  });

  it("Remove task", () => {
    const store = useTasksStore();
    const LENGTH = store.tasks.length;
    const EXPECTED = store.tasks.length - 1;

    expect(store.tasks).toHaveLength(LENGTH);
    store.removeTask("10");
    expect(store.tasks).toHaveLength(EXPECTED);
  });
});
