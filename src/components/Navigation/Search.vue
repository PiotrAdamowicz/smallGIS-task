<script setup lang="ts">
import { useTasksStore } from "../../store/useTasksStore";

const store = useTasksStore();
</script>

<template>
  <div class="w-full pb-4">
    <InputText
      type="text"
      placeholder="Search by title/description"
      v-model="store.searchQuery"
      class="w-full"
    />
  </div>
</template>
