<script setup lang="ts">
import { ref } from "vue";
import TaskForm from "../TaskForm.vue";
import type { Task } from "../../types/tasks";
import TaskControls from "./TaskControls.vue";

const props = defineProps<{ task: Task }>();
const visible = ref(false);
</script>

<template>
  <Card :class="{ 'max-h-24': !visible }">
    <template #title>
      <TaskControls
        v-model:visible="visible"
        v-model:completed="props.task.completed"
        :title="props.task.title"
        :created="props.task.created"
        :id="props.task.id"
      />
    </template>

    <template #content>
      <TaskForm
        v-if="visible"
        v-model:title="task.title"
        v-model:description="task.description"
      />
    </template>
  </Card>
</template>
<style scoped>
:deep(.p-card-body) {
  padding-left: 0;
  padding-right: 0;
}
</style>
