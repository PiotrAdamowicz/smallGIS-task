<script lang="ts" setup>
import { ref } from "vue";
import TaskForm from "../TaskForm.vue";
import TaskStatus from "../TaskStatus.vue";
import { uid } from "../../utils/uid";
import type { Task } from "../../types/tasks";
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
const visible = ref(false);

const task = {
  id: uid(),
  title: "",
  created: undefined,
  description: "",
  completed: false
};
const initalState = ref<Task>(task);
const addTask = () => {
  initalState.value.created = new Date();
  store.addTask(initalState.value);
  visible.value = false;
};
</script>

<template>
  <div class="fixed bottom-0 right-0 m-4">
    <Dialog
      v-model:visible="visible"
      :draggable="false"
      position="left"
      closeIcon="pi pi-arrow-left"
      modal
      :style="{ width: '100vw', height: '100vh' }"
    >
      <TaskForm
        v-model:title="initalState.title"
        v-model:description="initalState.description"
      />
      <span class="inline-flex justify-between w-full px-2 py-4">
        <TaskStatus :completed="initalState.completed" label="Status: " />
        <ToggleSwitch v-model="initalState.completed" class="" />
      </span>
      <template #footer>
        <Button
          @click="addTask"
          severity="success"
          label="Save"
          raised
          class="font-bold"
        />
      </template>
    </Dialog>
    <Button
      @click="visible = true"
      icon="pi pi-plus"
      rounded
      aria-label="Filter"
      severity="success"
      raised
      size="large"
      class="my-1 font-bold"
    />
  </div>
</template>
