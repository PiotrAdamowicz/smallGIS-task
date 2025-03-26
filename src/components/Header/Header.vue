<script lang="ts" setup>
import FilterByStatus from "./FilterByStatus.vue";
import Search from "./Search.vue";
import SortByDate from "./SortByDate.vue";
import DarkModeToggle from "./DarkModeToggle.vue";
</script>

<template>
  <header class="mx-4 mb-2 mt-4">
    <Search />
    <div class="w-full flex flex-col sm:flex-row gap-x-3 gap-y-2">
      <SortByDate />
      <FilterByStatus />
      <DarkModeToggle />
    </div>
  </header>
</template>
