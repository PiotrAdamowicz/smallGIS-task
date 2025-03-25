<script lang="ts" setup>
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore";

const showDoneTasks = defineModel<boolean>("showDoneTasks");
const store = useTasksStore();
let sortAscending = computed(() => store.sortAscending);
</script>

<template>
  <nav class="my-4 px-4">
    <div>Search Bar: search by title or description</div>
    <div class="inline-flex justify-between w-full px-4 pt-2">
      <p>Sort by date:</p>
      <Button @click="store.toggleSort()" severity="secondary">
        <i v-if="sortAscending" class="pi pi-plus" />
        <i v-else class="pi pi-minus" />
      </Button>
    </div>
    <div class="inline-flex justify-between w-full px-4 pt-2">
      <p>Show:</p>
      <Button @click="showDoneTasks = !showDoneTasks" severity="secondary">
        <span v-if="showDoneTasks" class="text-blue-400 font-bold">
          To do
        </span>
        <span v-else class="font-bold">All </span>
      </Button>
    </div>
  </nav>
</template>
