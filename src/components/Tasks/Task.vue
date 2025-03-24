<script setup lang="ts">
import { ref } from "vue";
import TaskForm from "../TaskForm.vue";
import type { Task } from "../../types/tasks";

const props = defineProps<{ task: Task }>();

const visible = ref(false);

const showTask = () => {
  visible.value = true;
};
const closeTask = () => {
  visible.value = false;
};
</script>

<template>
  <Card @click.capture="showTask" :class="{ 'max-h-24': !visible }">
    <template v-if="!visible" #title>{{ props.task.title }}</template>
    <template v-else #title>
      <div class="flex gap-2 justify-between">
        <Button
          v-if="visible"
          @click="closeTask"
          icon="pi pi-arrow-left"
          severity="secondary"
          class="font-bold"
          variant="text"
        />
        <Button
          v-if="visible"
          @click="closeTask"
          icon="pi pi-trash"
          severity="danger"
          class="font-bold"
          variant="text"
        />
      </div>
    </template>
    <template #content>
      <p v-if="!visible" class="truncate">
        {{ props.task.description }}
      </p>
      <TaskForm
        v-else
        v-model:title="task.title"
        v-model:description="task.description"
      />
    </template>
  </Card>
</template>
<style scoped>
/* .p-card {
  overflow: clip;
} */
</style>
