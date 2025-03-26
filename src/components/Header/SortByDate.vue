<script setup lang="ts">
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
let sortAscending = computed(() => store.sortAscending);
</script>

<template>
  <Button
    @click="store.toggleSort()"
    severity="secondary"
    class="w-full sm:w-1/3"
  >
    <p class="xl:text-2xl">Sort by date:</p>
    <i v-if="sortAscending" class="pi pi-arrow-up xl:!text-2xl mx-2" />
    <i v-else class="pi pi-arrow-down xl:!text-2xl mx-2" />
  </Button>
</template>
