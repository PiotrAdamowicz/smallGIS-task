<script lang="ts" setup>
import Task from "./Task.vue";
import { useTasksStore } from "../../store/useTasksStore.ts";
import { computed } from "vue";

const store = useTasksStore();

const tasks = computed(() => store.getFilteredTasks);
</script>
<template>
  <TransitionGroup
    enterActiveClass="transition-opacity duration-300 transition-transform duration-300"
    leaveActiveClass="transition-transform duration-300"
    enterFromClass="opacity-0 scale-0 "
    leaveToClass="-translate-x-full"
    tag="main"
    class="my-2 px-4 pb-2 flex flex-col gap-2 flex-grow transition-opacity"
  >
    <Task v-for="task in tasks" :task :key="task.id" />
  </TransitionGroup>
</template>
