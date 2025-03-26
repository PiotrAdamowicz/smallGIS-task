<script lang="ts" setup>
const { completed, label } = defineProps<{
  completed?: boolean;
  label?: string;
}>();
</script>

<template>
  <span class="inline-flex justify-between gap-2">
    <p v-if="label" class="text-sm xl:text-xl text-center">{{ label }}</p>
    <p
      v-if="completed"
      class="text-sm font-bold text-green-500 xl:text-xl text-center w-full"
    >
      Done
    </p>
    <p v-else class="text-sm text-blue-400 xl:text-xl w-full text-center">
      To do
    </p>
  </span>
</template>
