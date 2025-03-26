import { setActivePinia, createPinia } from "pinia";
import { useTasksStore } from "../src/store/useTasksStore";
import { describe, beforeEach, it, expect } from "vitest";
import { uid } from "../src/utils/uid.ts";
import { searchByQuery } from "../src/helpers/searchByQuery";
import { sortByDate } from "../src/helpers/sortTasks";

const newTask = () => ({
  id: uid(),
  title: "Task " + Math.random(),
  created: new Date(),
  description: "This is test task",
  completed: false
});

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

  it("Toggle filtering by status state", () => {
    const store = useTasksStore();
    const CURRENT = store.showDoneTasks;
    const EXPECTED = !store.showDoneTasks;

    expect(store.showDoneTasks).toBe(CURRENT);
    expect(store.getFilteredTasks).toHaveLength(10);

    store.toggleDoneTasks();
    expect(store.showDoneTasks).toBe(EXPECTED);
    expect(store.getFilteredTasks).toHaveLength(8);
  });

  it("Add task with unique ID", () => {
    const store = useTasksStore();
    const LENGTH = store.tasks.length;
    const EXPECTED = store.tasks.length + 1;

    expect(store.tasks).toHaveLength(LENGTH);
    store.addTask(newTask());
    expect(store.tasks).toHaveLength(EXPECTED);
    store.addTask(newTask());
    expect(store.tasks[0].id).not.toEqual(store.tasks[1].id);
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
