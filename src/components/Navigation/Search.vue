<script setup lang="ts">
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
</script>

<template>
  <div class="w-full px-2 pb-2">
    <InputText
      type="text"
      placeholder="Search by title/description"
      v-model="store.searchQuery"
      class="w-full"
    />
  </div>
</template>
