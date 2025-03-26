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
      <div class="transition hover:bg-gray-600 cursor-pointer">
        <TaskForm
          v-if="visible"
          v-model:title="task.title"
          v-model:description="task.description"
        />
      </div>
    </template>
  </Card>
</template>
