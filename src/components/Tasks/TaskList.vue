<script lang="ts" setup>
import Task from "./Task.vue";
import { useTasksStore } from "../../store/useTasksStore.ts";

const store = useTasksStore();
</script>
<template>
  <main class="my-4 px-4 pb-2 flex flex-col gap-2 flex-grow">
    <Task v-for="task in store.tasks" :task :key="task.id" />
  </main>
</template>
