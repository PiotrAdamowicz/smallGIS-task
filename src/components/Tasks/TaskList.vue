<script lang="ts" setup>
import Task from "./Task.vue";
import { useTasksStore } from "../../store/useTasksStore.ts";
import { computed } from "vue";

const { showNotDone } = defineProps<{
  showNotDone: boolean;
}>();
const store = useTasksStore();

const tasks = computed(() => {
  return showNotDone ? store.getNotDone : store.getAllTasks;
});
</script>
<template>
  <main class="my-4 px-4 pb-2 flex flex-col gap-2 flex-grow">
    <Task v-for="task in tasks" :task :key="task.id" />
  </main>
</template>
