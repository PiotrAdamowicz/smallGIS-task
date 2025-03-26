<script lang="ts" setup>
import { ref, watch } from "vue";
import TaskForm from "../TaskForm.vue";
import TaskStatus from "../TaskStatus.vue";
import { uid } from "../../utils/uid";
import type { Task } from "../../types/tasks";
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
const visible = ref<boolean>(false);
const showError = ref<boolean>(false);

const validationError = "Title must not be empty";

const title = ref("");
const description = ref("");
const completed = ref(false);
const taskId = ref<Date | "">("");

// const task = {
//   id: uid(),
//   title: "",
//   created: new Date(),
//   description: "",
//   completed: false
// };

const addTask = () => {
  if (title.value.length <= 0) {
    showError.value = true;
    return;
  }

  //populate new task
  const task = {
    id: uid(),
    title: title.value,
    created: new Date(),
    description: description.value,
    completed: completed.value
  };

  //update store
  store.addTask(task);

  //reset form
  visible.value = false;
  title.value = "";
  description.value = "";
  completed.value = false;
};
watch(
  () => title.value,
  () => {
    console.log("change");
    if (title.value.length > 0) {
      showError.value = false;
    }
  }
);
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
      <TaskForm v-model:title="title" v-model:description="description" />
      <span class="inline-flex justify-between w-full px-2 py-4">
        <TaskStatus :completed="completed" label="Status: " />
        <ToggleSwitch v-model="completed" class="" />
      </span>
      <template #footer>
        <span v-if="showError" class="text-red-500 my-auto">{{
          validationError
        }}</span>
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
