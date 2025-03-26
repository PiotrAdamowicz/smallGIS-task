<script setup lang="ts">
import { ref } from "vue";
import AddTask from "./components/AddTask/AddTask.vue";
import Navigation from "./components/Navigation/Navigation.vue";
import TaskList from "./components/Tasks/TaskList.vue";

const sortAscending = ref<boolean>(false);
</script>

<template>
  <Navigation
    v-model:showDoneTasks="showDoneTasks"
    v-model:sortAscending="sortAscending"
  />
  <TaskList :sortAscending="sortAscending" />
  <AddTask />
  <footer class="px-4 pb-4 bottom-0 left-0 right-0 mr-14">Made by me</footer>
</template>
