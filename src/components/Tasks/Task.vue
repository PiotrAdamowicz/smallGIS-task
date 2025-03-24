<script setup lang="ts">
import { ref } from "vue";
import TaskForm from "../TaskForm.vue";
import { useDateFormat } from "@vueuse/core";
import type { Task } from "../../types/tasks";

const props = defineProps<{ task: Task }>();

const visible = ref(false);
const formattedCreationDate = useDateFormat(
  props.task.created,
  "HH:mm:ss DD-MM-YYYY"
);

const showTask = () => {
  visible.value = true;
};
const closeTask = () => {
  visible.value = false;
};
</script>

<template>
  <Card @click.capture="showTask" :class="{ 'max-h-24': !visible }">
    <template v-if="!visible" #title>
      <span class="flex gap-2 justify-between">
        <p>{{ props.task.title }}</p>
        <p class="text-sm">{{ formattedCreationDate }}</p>
      </span>
    </template>
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
