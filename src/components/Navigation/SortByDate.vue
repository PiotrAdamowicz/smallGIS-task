<script setup lang="ts">
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
let sortAscending = computed(() => store.sortAscending);
</script>

<template>
  <!-- <div class="inline-flex justify-between px-4 pt-2"> -->
  <Button
    @click="store.toggleSort()"
    severity="secondary"
    class="w-full sm:w-1/3"
  >
    <p class="">Sort by date:</p>
    <i v-if="sortAscending" class="pi pi-arrow-up" />
    <i v-else class="pi pi-arrow-down" />
  </Button>
  <!-- </div> -->
</template>
