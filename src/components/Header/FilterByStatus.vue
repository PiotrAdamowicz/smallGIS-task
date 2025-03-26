<script setup lang="ts">
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore.ts";

const store = useTasksStore();

const showDoneTasks = computed(() => store.showDoneTasks);
</script>

<template>
  <!-- <div class="inline-flex justify-between px-4 pt-2"> -->
  <Button
    @click="store.toggleDoneTasks"
    severity="secondary"
    class="w-full sm:w-1/3"
  >
    <span class="">Show:</span>
    <span v-if="showDoneTasks" class="text-blue-400 font-bold"> To do </span>
    <span v-else class="font-bold">All </span>
  </Button>
  <!-- </div> -->
</template>
