import { setActivePinia, createPinia } from "pinia";
import { useTasksStore } from "../src/store/useTasksStore";
import { describe, beforeEach, it, expect } from "vitest";
import { CompletedTask } from "../src/types/enums";

const newTask = {
  id: 4,
  title: "Task 4",
  created: new Date(),
  description: "This is task 4",
  completed: CompletedTask.notDone
};

describe("Use Tasks Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Adds task", () => {
    const store = useTasksStore();
    expect(store.tasks).toHaveLength(3);
    store.addTask(newTask);
    expect(store.tasks).toHaveLength(4);
  });
  //TODO: chek for removing specific task
  //Add initial state in test
  it("Removes task", () => {
    const store = useTasksStore();
    expect(store.tasks).toHaveLength(3);
    store.removeTask("1");
    expect(store.tasks).toHaveLength(2);
  });
});
