<script setup lang="ts">
import type { Task } from "../../types/tasks";
const props = defineProps<{ task: Task }>();
</script>

<template>
  <li>{{ props.task }}</li>
</template>
