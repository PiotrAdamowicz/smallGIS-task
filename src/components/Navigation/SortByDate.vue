<script setup lang="ts">
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
let sortAscending = computed(() => store.sortAscending);
</script>

<template>
  <div class="inline-flex justify-between w-full px-4 pt-2">
    <p>Sort by date:</p>
    <Button @click="store.toggleSort()" severity="secondary">
      <i v-if="sortAscending" class="pi pi-plus" />
      <i v-else class="pi pi-minus" />
    </Button>
  </div>
</template>
