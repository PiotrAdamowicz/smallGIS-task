<script setup lang="ts">
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore.ts";

const store = useTasksStore();

const showDoneTasks = computed(() => store.showDoneTasks);
</script>

<template>
  <Button
    @click="store.toggleDoneTasks"
    severity="secondary"
    class="w-full sm:w-1/3"
  >
    <span class="xl:text-2xl">Show:</span>
    <span v-if="showDoneTasks" class="text-blue-400 font-bold xl:text-2xl">
      To do
    </span>
    <span v-else class="font-bold xl:text-2xl">All </span>
  </Button>
</template>
