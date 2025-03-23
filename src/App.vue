<script setup lang="ts">
import AddTask from "./components/AddTask.vue";
import TaskList from "./components/Tasks/TaskList.vue";
</script>

<template>
  <TaskList />
  <AddTask />
  <footer class="px-8 pb-8 fixed bottom-0 left-0 right-0">Made by me</footer>
</template>
