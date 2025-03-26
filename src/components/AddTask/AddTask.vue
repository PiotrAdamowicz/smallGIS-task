<script lang="ts" setup>
import { ref, watch } from "vue";
import TaskForm from "../TaskForm.vue";
import TaskStatus from "../TaskStatus.vue";
import { uid } from "../../utils/uid";
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
const visible = ref<boolean>(false);
const showError = ref<boolean>(false);

const validationError = "Title must not be empty";

const title = ref("");
const description = ref("");
const completed = ref(false);

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
  showError.value = false;
};
watch(
  () => title.value,
  () => {
    if (title.value.length > 0) {
      showError.value = false;
    }
  }
);
</script>

<template>
  <div class="sticky bottom-0 inset-x-full w-fit m-4">
    <Dialog
      v-model:visible="visible"
      :draggable="false"
      position="left"
      closeIcon="pi pi-arrow-left xl:!text-3xl"
      modal
      class="mx-auto w-full xl:w-3/5 xl:container"
      pt:mask="!justify-center"
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
          class="font-bold xl:!text-2xl"
        />
      </template>
    </Dialog>
    <Button
      @click="visible = true"
      icon="pi pi-plus xl:!text-4xl"
      rounded
      aria-label="Filter"
      severity="success"
      raised
      size="large"
      class="my-1 font-bold"
    />
  </div>
</template>
<style scoped>
@media (min-width: 1280px) {
  :deep(.p-button-lg.p-button-icon-only.p-button-rounded) {
    --p-button-lg-icon-only-width: 5rem;
  }
}
</style>
