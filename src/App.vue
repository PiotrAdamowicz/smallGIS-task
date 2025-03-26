<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header/Header.vue";
import TaskList from "./components/Tasks/TaskList.vue";
import Footer from "./components/Footer.vue";

const sortAscending = ref<boolean>(false);
</script>

<template>
  <Header v-model:sortAscending="sortAscending" />
  <TaskList :sortAscending="sortAscending" />
  <Footer />
</template>
