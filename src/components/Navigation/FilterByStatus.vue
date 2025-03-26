<script setup lang="ts">
const showDoneTasks = defineModel<boolean>("showDoneTasks");
</script>

<template>
  <div class="inline-flex justify-between w-full px-4 pt-2">
    <p>Show:</p>
    <Button @click="showDoneTasks = !showDoneTasks" severity="secondary">
      <span v-if="showDoneTasks" class="text-blue-400 font-bold"> To do </span>
      <span v-else class="font-bold">All </span>
    </Button>
  </div>
</template>
