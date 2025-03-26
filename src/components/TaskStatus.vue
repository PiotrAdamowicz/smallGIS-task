<script lang="ts" setup>
const { completed, label } = defineProps<{
  completed?: boolean;
  label?: string;
}>();
</script>

<template>
  <span class="inline-flex gap-2 row-start-2 col-start-5">
    <p class="text-sm">{{ label }}</p>
    <p v-if="completed" class="text-sm font-bold text-green-500">Done</p>
    <p v-else class="text-sm text-blue-400">To do</p>
  </span>
</template>
