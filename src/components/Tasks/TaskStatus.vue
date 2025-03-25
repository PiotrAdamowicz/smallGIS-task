<script lang="ts" setup>
const { completed } = defineProps<{ completed?: boolean }>();
</script>

<template>
  <p v-if="completed" class="row-start-2 col-start-5 text-sm text-green-500">
    Done
  </p>
  <p v-else class="row-start-2 col-start-5 text-sm text-blue-400">To do</p>
</template>
