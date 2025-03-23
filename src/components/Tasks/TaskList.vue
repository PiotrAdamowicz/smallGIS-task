<script lang="ts" setup>
import Task from "./Task.vue";
import { useTasksStore } from "../../store/useTasksStore.ts";

const store = useTasksStore();
</script>
<template>
  <main class="px-8 pb-2">
    <ul>
      <Task v-for="task in store.tasks" :task :key="task.id" />
    </ul>
  </main>
</template>
